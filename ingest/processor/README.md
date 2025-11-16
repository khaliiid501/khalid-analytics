````markdown name=ingest/processor/README.md
```markdown
# Processor service (Khalid Analytics)

وحدة معالجة لحساب مؤشرات فنية بسيطة (SMA و EMA) من تيار التداول الحي الذي تبثه خدمة الـingest.

الوظيفة:
- تتصل إلى خدمة ingest عبر Socket.IO لتلقي أحداث `market:trade`.
- تحافظ على نوافذ أسعار لكل رمز وتحسب SMA و EMA لعدة فترات.
- تنشر النتائج إلى Redis Stream `market:indicators`، ويمكن حفظها إلى TimescaleDB إن تم تهيئته.

الملفات المضافة:
- src/index.js: منطق المعالجة
- .env.example: إعداد متغيرات البيئة
- package.json: تعريف الحزم

التشغيل المحلي:
1. انسخ `.env.example` إلى `.env` وعدّل القيم (INGEST_URL, REDIS_URL,...)
2. تثبيت الحزم:

```bash
cd ingest/processor
npm install
```

3. تشغيل:

```bash
npm start
```

ملاحظات:
- تأكد من تشغيل خدمة `ingest` أولًا (التي تعمل على Socket.IO).
- إن أردت استهلاك المؤشرات داخل المشروع، استخدم Redis XREAD على `market:indicators` أو استمع للحدث عبر قناة مخصصة إذا أضفت نشرًا عبر Pub/Sub.
- الكود مخصص لبيئة تجريبية، قد تحتاج لكتابة اختبارات، إدارة أخطاء أفضل، والقياس في الإنتاج.
```
````