import { Client } from '@notionhq/client';
import { NextResponse } from 'next/server';

const notionToken = process.env.NOTION_TOKEN ?? process.env.NOTION_API_KEY;
const subscribersDb = process.env.NOTION_SUBSCRIBERS_DATABASE_ID;

const notionClient = notionToken ? new Client({ auth: notionToken }) : null;

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null);

  if (!payload) {
    return NextResponse.json({ error: 'بيانات غير صالحة.' }, { status: 400 });
  }

  const email = String(payload.email ?? '').trim().toLowerCase();
  const fullName = String(payload.fullName ?? '').trim();
  const company = String(payload.company ?? '').trim();
  const plan = String(payload.plan ?? '').trim();

  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'يرجى إدخال بريد إلكتروني صحيح.' }, { status: 422 });
  }

  if (!notionClient || !subscribersDb) {
    return NextResponse.json(
      { error: 'خدمة الاشتراك غير مهيأة بعد. يرجى إكمال إعداد التكامل.' },
      { status: 503 }
    );
  }

  const properties: Record<string, any> = {
    Name: {
      title: [
        {
          text: {
            content: fullName || email,
          },
        },
      ],
    },
    Email: {
      email,
    },
    Company: {
      rich_text: company
        ? [
            {
              text: {
                content: company,
              },
            },
          ]
        : [],
    },
  };

  if (plan) {
    properties.Plan = {
      select: { name: plan },
    };
  }

  try {
    await notionClient.pages.create({
      parent: { database_id: subscribersDb },
      properties,
    });
  } catch (error) {
    console.error('Failed to add subscriber', error);
    return NextResponse.json(
      { error: 'تعذر حفظ الاشتراك في قاعدة البيانات، يرجى المحاولة مرة أخرى.' },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
