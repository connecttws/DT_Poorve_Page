import { google } from 'googleapis';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();

    // ── 1. Validate required fields ───────────────────────────────────────────
    const { fullName, phone, gender, nutritionGoal, currentDiet, startTime, contactTime } = body;

    if (!fullName || !phone) {
      return NextResponse.json(
        { error: 'Full name and phone number are required.' },
        { status: 400 }
      );
    }

    // ── 2. Authenticate with Google using Service Account ─────────────────────
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        // Replace literal \n with actual newlines
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // ── 3. Append a new row to the sheet ──────────────────────────────────────
    // Column order: A=Timestamp, B=FullName, C=Phone, D=Gender,
    //               E=NutritionGoal, F=CurrentDiet, G=StartTime, H=ContactTime
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Sheet1!A:H',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [
            new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
            fullName,
            phone,
            gender || '—',
            nutritionGoal || '—',
            currentDiet || '—',
            startTime || '—',
            contactTime || '—',
          ],
        ],
      },
    });

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error('[Google Sheets API Error]:', error.message);
    return NextResponse.json(
      { error: 'Failed to submit form. Please try again later.' },
      { status: 500 }
    );
  }
}
