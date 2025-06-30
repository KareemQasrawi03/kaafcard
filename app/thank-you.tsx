export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white shadow-lg rounded-xl p-10 text-center space-y-4">
        <h1 className="text-3xl font-bold text-green-600">
          شكراً لتواصلك معنا!
        </h1>
        <p className="text-gray-700">
          تم إرسال رسالتك بنجاح، وسنقوم بالرد عليك قريباً.
        </p>
      </div>
    </div>
  );
}
