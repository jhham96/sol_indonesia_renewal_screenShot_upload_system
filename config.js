// Vercel Environment Variable 또는 로컬 주소 바인딩
window.ENV = {
  // ⚠️ 로컬 테스트 시 아래에 URL을 넣고, Vercel 배포 시에는 Vercel Dashboard의 Environment Variable(NEXT_PUBLIC_GAS_URL) 사용 가능
  GAS_WEB_APP_URL:
    typeof process !== "undefined" &&
    process.env &&
    process.env.NEXT_PUBLIC_GAS_URL
      ? process.env.NEXT_PUBLIC_GAS_URL
      : "https://script.google.com/macros/s/AKfycbwooMjhJV_Zq8jMfoDjYeJYL_2MZWf94HdfeHIXdvUTuOMpjoG3f0JVHilL3RO92jt22A/exec",
};
