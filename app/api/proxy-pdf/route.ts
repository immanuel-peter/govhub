// app/api/proxy-pdf/route.ts
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");
  if (!url) {
    return new Response("Missing url", { status: 400 });
  }

  // Fetch the PDF from the external source
  const pdfRes = await fetch(url);
  if (!pdfRes.ok) {
    return new Response("Failed to fetch PDF", { status: pdfRes.status });
  }

  // Stream the PDF back to the client
  return new Response(pdfRes.body, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      // Optionally, force download:
      // "Content-Disposition": "attachment; filename=document.pdf"
    },
  });
}
