import Script from "next/script";

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script id="servagency-document-language" strategy="beforeInteractive">
        {`document.documentElement.lang="en";`}
      </Script>
      {children}
    </>
  );
}
