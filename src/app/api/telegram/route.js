import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    
    console.log('Telegram API called with type:', body.type);
    
    // Get Telegram credentials from environment variables
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;
    
    console.log('Bot token exists:', !!TELEGRAM_BOT_TOKEN);
    console.log('Chat ID exists:', !!TELEGRAM_CHAT_ID);
    
    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      console.error('Missing Telegram credentials');
      return NextResponse.json(
        { 
          error: 'Telegram configuration missing',
          details: 'Please set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID in .env.local'
        },
        { status: 500 }
      );
    }

    // Format the message based on the type
    let message = '';
    
    if (body.type === 'contact_form') {
      message = `
🎯 *NEW CONTACT FORM SUBMISSION*

*Name:* ${body.name}
${body.company ? `*Company:* ${body.company}\n` : ''}*Email:* ${body.email}
${body.budget ? `*Budget:* ${body.budget}\n` : ''}${body.timeline ? `*Timeline:* ${body.timeline}\n` : ''}
*Project Details:*
${body.projectIdea}

📅 ${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })} at ${new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true })}
      `.trim();
    } else if (body.type === 'consultation_request') {
      message = `
📞 *CONSULTATION REQUEST*

*Name:* ${body.name}
*Email:* ${body.email}
*Phone:* ${body.phone}
${body.message ? `*Message:* ${body.message}\n` : ''}
*Page:* ${body.page || 'Website'}
📅 ${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })} at ${new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true })}

⚡ Contact within 24 hours
      `.trim();
    } else if (body.type === 'consultation_click') {
      message = `
📞 *CONSULTATION BUTTON CLICKED*

${body.name ? `*Name:* ${body.name}\n` : ''}${body.email ? `*Email:* ${body.email}\n` : ''}*Page:* ${body.page || 'Contact Page'}
📅 ${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })} at ${new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true })}
      `.trim();
    } else if (body.type === 'email_click') {
      message = `
📧 *EMAIL LINK CLICKED*

*Page:* ${body.page || 'Unknown'}
*Email:* contact@codinggurus.in
📅 ${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })} at ${new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true })}
      `.trim();
    }

    console.log('Sending message to Telegram...');
    
    // Send message to Telegram
    const telegramApiUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    
    const response = await fetch(telegramApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'Markdown',
      }),
    });

    const data = await response.json();
    
    console.log('Telegram API response status:', response.status);
    console.log('Telegram API response:', data);

    if (!response.ok) {
      console.error('Telegram API error:', data);
      return NextResponse.json(
        { 
          error: 'Failed to send message to Telegram',
          details: data.description || 'Unknown error',
          telegramError: data
        },
        { status: 500 }
      );
    }

    console.log('Message sent successfully to Telegram');
    return NextResponse.json({ success: true, message: 'Message sent to Telegram' });
  } catch (error) {
    console.error('Error sending Telegram message:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: error.message
      },
      { status: 500 }
    );
  }
}
