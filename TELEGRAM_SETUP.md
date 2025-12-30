# Telegram Bot Setup Guide

This guide will help you set up the Telegram bot to receive notifications when users submit forms or click on contact/consultation links.

## Step 1: Create a Telegram Bot

1. Open Telegram and search for **@BotFather**
2. Start a chat with BotFather and send `/newbot`
3. Follow the prompts:
   - Choose a name for your bot (e.g., "Coding Gurus Notifications")
   - Choose a username for your bot (must end in 'bot', e.g., "codinggurus_notify_bot")
4. BotFather will give you a **BOT TOKEN** - save this! It looks like:
   ```
   1234567890:ABCdefGHIjklMNOpqrsTUVwxyz
   ```

## Step 2: Get Your Chat ID

### Method 1: Using @userinfobot
1. Search for **@userinfobot** in Telegram
2. Start a chat and it will send you your Chat ID
3. Your Chat ID is a number like `123456789`

### Method 2: Using the Telegram API
1. Send a message to your bot (the one you just created)
2. Open this URL in your browser (replace YOUR_BOT_TOKEN):
   ```
   https://api.telegram.org/botYOUR_BOT_TOKEN/getUpdates
   ```
3. Look for "chat":{"id": YOUR_CHAT_ID in the response
4. Copy that number

## Step 3: Add Environment Variables

Create or update the `.env.local` file in your project root:

```env
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_CHAT_ID=your_chat_id_here
```

Example:
```env
TELEGRAM_BOT_TOKEN=1234567890:ABCdefGHIjklMNOpqrsTUVwxyz
TELEGRAM_CHAT_ID=123456789
```

## Step 4: Test the Integration

1. Restart your Next.js development server:
   ```bash
   npm run dev
   ```

2. Go to your contact page and submit a form

3. You should receive a notification in Telegram!

## Notifications You'll Receive

### 1. Contact Form Submission
When someone fills out the contact form, you'll get:
- Name
- Company
- Email
- Budget range
- Timeline
- Project details

### 2. Consultation Button Click
When someone clicks "Book a free consultation call"

### 3. Email Link Click
When someone clicks on your email address

## Troubleshooting

### Not receiving messages?
1. Make sure your bot token and chat ID are correct in `.env.local`
2. Make sure you've started a chat with your bot (send any message)
3. Restart your Next.js server after adding environment variables
4. Check the browser console for any errors

### Environment variables not working?
- Make sure the file is named `.env.local` (not `.env`)
- Restart your development server
- Don't commit this file to Git (it should be in `.gitignore`)

## For Production (Vercel/Other Hosting)

1. Go to your hosting platform's dashboard
2. Add the environment variables:
   - `TELEGRAM_BOT_TOKEN`
   - `TELEGRAM_CHAT_ID`
3. Redeploy your application

### For Vercel:
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add both variables
4. Redeploy

## Security Notes

- ⚠️ **Never commit your `.env.local` file to Git**
- ⚠️ **Never share your bot token publicly**
- ⚠️ Keep your Chat ID private
- The `.env.local` file is already in `.gitignore`

## Testing Commands

To test if your bot is working, you can use this cURL command:

```bash
curl -X POST https://api.telegram.org/bot<YOUR_BOT_TOKEN>/sendMessage \
  -H "Content-Type: application/json" \
  -d '{
    "chat_id": "<YOUR_CHAT_ID>",
    "text": "Test message from Coding Gurus website!"
  }'
```

Replace `<YOUR_BOT_TOKEN>` and `<YOUR_CHAT_ID>` with your actual values.

## Need Help?

If you encounter any issues:
1. Check the server logs in your terminal
2. Check the browser console for errors
3. Verify your environment variables are correct
4. Make sure your bot is not blocked and you've sent it at least one message

---

**Note:** The Telegram integration is now active on:
- Contact form submissions
- Email link clicks
- Consultation button clicks
