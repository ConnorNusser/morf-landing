import { NextRequest, NextResponse } from 'next/server';

const JSONBIN_API_KEY = '$2a$10$na7n1st8voArsccHQHuHB.Dg2qt3qit/n644JCHXaW8Ib2fmFOa5y';
const JSONBIN_BIN_ID = '6866fbb98a456b7966baea6b';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    const signupData = {
      id: Date.now().toString(),
      email: data.email,
      domain: data.email.split('@')[1],
      timestamp: new Date().toISOString(),
      userAgent: data.userAgent,
      isMobile: data.isMobile,
      viewport: data.viewport,
      ipAddress: request.headers.get('x-forwarded-for') || 'unknown'
    };

    // Get existing data from bin
    let existingSignups = [];
    try {
      const getResponse = await fetch(`https://api.jsonbin.io/v3/b/${JSONBIN_BIN_ID}/latest`, {
        headers: {
          'X-Master-Key': JSONBIN_API_KEY,
        }
      });
      
      if (getResponse.ok) {
        const existingData = await getResponse.json();
        existingSignups = existingData.record.signups || [];
      }
    } catch {
      console.log('No existing data found, starting fresh');
    }

    // Add new signup
    existingSignups.push(signupData);

    // Update the bin
    const updateResponse = await fetch(`https://api.jsonbin.io/v3/b/${JSONBIN_BIN_ID}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Master-Key': JSONBIN_API_KEY,
      },
      body: JSON.stringify({
        signups: existingSignups,
        lastUpdated: new Date().toISOString(),
        totalCount: existingSignups.length
      })
    });

    if (!updateResponse.ok) {
      throw new Error(`JSONBin error: ${updateResponse.statusText}`);
    }

    console.log('✅ EMAIL SAVED TO JSONBIN:', {
      id: signupData.id,
      email: data.email,
      totalSignups: existingSignups.length,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Email saved successfully',
      id: signupData.id,
      totalSignups: existingSignups.length
    });
    
  } catch (error) {
    console.error('❌ SIGNUP ERROR:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to save email' },
      { status: 500 }
    );
  }
} 