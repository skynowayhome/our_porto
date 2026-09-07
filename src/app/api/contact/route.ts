import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      name,
      contactType = "email",
      email,
      whatsapp,
      category,
      budget,
      description,
      projectLink,
    } = body;

    // Basic validation
    if (!name?.trim() || !description?.trim()) {
      return NextResponse.json(
        { error: "Nama dan deskripsi kebutuhan wajib diisi." },
        { status: 400 }
      );
    }

    if (contactType === "email" && !email?.trim()) {
      return NextResponse.json(
        { error: "Alamat email wajib diisi." },
        { status: 400 }
      );
    }

    if (contactType === "whatsapp" && !whatsapp?.trim()) {
      return NextResponse.json(
        { error: "Nomor WhatsApp wajib diisi." },
        { status: 400 }
      );
    }

    if (contactType === "both" && !email?.trim() && !whatsapp?.trim()) {
      return NextResponse.json(
        { error: "Harap isi minimal salah satu kontak (Email atau WhatsApp)." },
        { status: 400 }
      );
    }

    const smtpUser = process.env.SMTP_USER || "zeki.studiodev@gmail.com";
    const smtpPass = process.env.SMTP_PASS;
    const recipient = process.env.MAIL_TO || "zeki.studiodev@gmail.com";

    if (!smtpPass) {
      console.warn("SMTP_PASS is not configured in environment variables.");
    }

    // Format WhatsApp phone for wa.me link if available
    const cleanWa = whatsapp ? whatsapp.replace(/[^0-9]/g, "") : "";
    const waLink = cleanWa
      ? `https://wa.me/${cleanWa.startsWith("0") ? "62" + cleanWa.slice(1) : cleanWa}`
      : null;

    // Configure Nodemailer transporter with Gmail service
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const emailSubject = `Prospek Proyek Baru: ${name} (${category || "Diskusi Sistem"})`;

    // ── Design tokens ──
    // All critical styling is applied inline per element because
    // Gmail / Outlook frequently strip or override <style> blocks.
    const ink    = "#0f0f0f";
    const accent = "#1a1a2e";
    const sub    = "#52525b";
    const muted  = "#94949c";
    const faint  = "#b0b0b8";
    const line   = "#e2e2e6";
    const card   = "#f7f7f8";
    const bg     = "#eeeef0";
    const white  = "#ffffff";
    const border = "#d1d1d6";
    const font   = "'Segoe UI',Roboto,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif";
    const mono   = "'SF Mono','Cascadia Code','Consolas',monospace";

    const timestamp = new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" });

    const emailHtml = `
      <!DOCTYPE html>
      <html lang="id" dir="ltr">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Diskusi Proyek Baru — Zeki Studio</title>
      </head>
      <body style="margin:0;padding:0;background-color:${bg};-webkit-font-smoothing:antialiased;">

        <!-- Outer wrapper -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${bg};padding:48px 16px;">
          <tr>
            <td align="center">

              <!-- Main card -->
              <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;border-radius:12px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.06),0 8px 24px rgba(0,0,0,0.04);">

                <!-- ====== ACCENT BAR ====== -->
                <tr>
                  <td style="height:4px;background:linear-gradient(90deg,${accent} 0%,#3a3a5c 50%,${accent} 100%);font-size:0;line-height:0;">&nbsp;</td>
                </tr>

                <!-- ====== HEADER ====== -->
                <tr>
                  <td style="background:${white};padding:36px 40px 28px 40px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td>
                          <p style="margin:0 0 16px 0;font-family:${mono};font-size:10px;font-weight:600;letter-spacing:2.5px;text-transform:uppercase;color:${muted};">Zeki Studio</p>
                          <h1 style="margin:0;font-family:${font};font-size:26px;font-weight:700;letter-spacing:-0.5px;color:${ink};line-height:1.2;">Diskusi Proyek Baru</h1>
                          <p style="margin:10px 0 0 0;font-family:${font};font-size:14px;color:${sub};line-height:1.55;">Formulir konsultasi masuk dari zekistudio.dev</p>
                        </td>
                        <td width="56" style="vertical-align:top;text-align:right;">
                          <table role="presentation" cellpadding="0" cellspacing="0" style="display:inline-block;">
                            <tr>
                              <td style="width:44px;height:44px;border-radius:50%;background:${card};border:1px solid ${line};text-align:center;vertical-align:middle;font-family:${font};font-size:18px;font-weight:700;color:${accent};">${name.charAt(0).toUpperCase()}</td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- ====== DIVIDER ====== -->
                <tr><td style="background:${white};padding:0 40px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td style="border-top:1px solid ${line};font-size:0;line-height:0;height:1px;">&nbsp;</td></tr></table></td></tr>

                <!-- ====== CLIENT INFO ====== -->
                <tr>
                  <td style="background:${white};padding:28px 40px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="50%" style="vertical-align:top;padding-right:16px;">
                          <p style="margin:0 0 6px 0;font-family:${mono};font-size:9px;font-weight:600;letter-spacing:1.8px;text-transform:uppercase;color:${faint};">Klien</p>
                          <p style="margin:0;font-family:${font};font-size:15px;font-weight:600;color:${ink};">${name}</p>
                        </td>
                        <td width="50%" style="vertical-align:top;">
                          <p style="margin:0 0 6px 0;font-family:${mono};font-size:9px;font-weight:600;letter-spacing:1.8px;text-transform:uppercase;color:${faint};">Metode kontak</p>
                          <p style="margin:0;font-family:${font};font-size:15px;font-weight:500;color:${ink};">${contactType === "both" ? "Email + WhatsApp" : contactType === "whatsapp" ? "WhatsApp" : "Email"}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- ====== CONTACT DETAILS CARD ====== -->
                <tr>
                  <td style="background:${white};padding:0 40px 28px 40px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${card};border:1px solid ${line};border-radius:8px;">
                      <tr>
                        <td style="padding:20px 24px;">
                          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                            <tr>
                              <td width="50%" style="vertical-align:top;padding-right:16px;">
                                <p style="margin:0 0 5px 0;font-family:${mono};font-size:9px;font-weight:600;letter-spacing:1.8px;text-transform:uppercase;color:${faint};">Email</p>
                                <p style="margin:0;font-family:${font};font-size:14px;font-weight:500;color:${ink};">${email ? `<a href="mailto:${email}" style="color:${ink};text-decoration:none;border-bottom:1px solid ${border};">${email}</a>` : `<span style="color:${muted};font-weight:400;">Tidak dicantumkan</span>`}</p>
                              </td>
                              <td width="50%" style="vertical-align:top;">
                                <p style="margin:0 0 5px 0;font-family:${mono};font-size:9px;font-weight:600;letter-spacing:1.8px;text-transform:uppercase;color:${faint};">WhatsApp</p>
                                <p style="margin:0;font-family:${font};font-size:14px;font-weight:500;color:${ink};">${whatsapp ? `<a href="${waLink || "#"}" style="color:${ink};text-decoration:none;border-bottom:1px solid ${border};">${whatsapp}</a>` : `<span style="color:${muted};font-weight:400;">Tidak dicantumkan</span>`}</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- ====== CATEGORY & BUDGET ====== -->
                <tr>
                  <td style="background:${white};padding:0 40px 28px 40px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="50%" style="vertical-align:top;padding-right:16px;">
                          <p style="margin:0 0 8px 0;font-family:${mono};font-size:9px;font-weight:600;letter-spacing:1.8px;text-transform:uppercase;color:${faint};">Kebutuhan</p>
                          <span style="display:inline-block;padding:6px 14px;border:1px solid ${line};border-radius:100px;font-family:${font};font-size:12px;font-weight:600;color:${accent};background:${card};">${category || "Umum"}</span>
                        </td>
                        <td width="50%" style="vertical-align:top;">
                          <p style="margin:0 0 8px 0;font-family:${mono};font-size:9px;font-weight:600;letter-spacing:1.8px;text-transform:uppercase;color:${faint};">Anggaran</p>
                          <span style="display:inline-block;padding:6px 14px;border:1px solid ${line};border-radius:100px;font-family:${font};font-size:12px;font-weight:600;color:${accent};background:${card};">${budget || "Konsultasi"}</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- ====== DIVIDER ====== -->
                <tr><td style="background:${white};padding:0 40px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td style="border-top:1px solid ${line};font-size:0;line-height:0;height:1px;">&nbsp;</td></tr></table></td></tr>

                <!-- ====== PROJECT DESCRIPTION ====== -->
                <tr>
                  <td style="background:${white};padding:28px 40px;">
                    <p style="margin:0 0 12px 0;font-family:${mono};font-size:9px;font-weight:600;letter-spacing:1.8px;text-transform:uppercase;color:${faint};">Deskripsi kebutuhan</p>
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="border-left:3px solid ${accent};padding:14px 20px;background:${card};border-radius:0 6px 6px 0;">
                          <p style="margin:0;font-family:${font};font-size:14.5px;line-height:1.75;color:#3f3f46;white-space:pre-wrap;">${description}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                ${
                  projectLink
                    ? `
                <!-- ====== PROJECT LINK ====== -->
                <tr>
                  <td style="background:${white};padding:0 40px 28px 40px;">
                    <p style="margin:0 0 8px 0;font-family:${mono};font-size:9px;font-weight:600;letter-spacing:1.8px;text-transform:uppercase;color:${faint};">Dokumen / Mockup</p>
                    <a href="${projectLink}" target="_blank" style="font-family:${font};font-size:13.5px;color:${accent};word-break:break-all;border-bottom:1px solid ${border};text-decoration:none;">${projectLink}</a>
                  </td>
                </tr>
                `
                    : ""
                }

                <!-- ====== ACTION BUTTONS ====== -->
                <tr>
                  <td style="background:${white};padding:8px 40px 36px 40px;">
                    <table role="presentation" cellpadding="0" cellspacing="0">
                      <tr>
                        ${
                          waLink
                            ? `<td style="padding:0 10px 0 0;"><a href="${waLink}" target="_blank" style="display:inline-block;padding:13px 28px;border-radius:8px;font-family:${font};font-size:13px;font-weight:600;text-decoration:none;background:${accent};color:${white};letter-spacing:0.2px;">Hubungi via WhatsApp</a></td>`
                            : ""
                        }
                        ${
                          email
                            ? `<td style="padding:0;"><a href="mailto:${email}?subject=Tindak%20Lanjut%20Diskusi%20Proyek%20Zeki%20Studio" style="display:inline-block;padding:12px 27px;border-radius:8px;font-family:${font};font-size:13px;font-weight:600;text-decoration:none;background:${white};color:${accent};border:1.5px solid ${border};letter-spacing:0.2px;">Balas via Email</a></td>`
                            : ""
                        }
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- ====== FOOTER ====== -->
                <tr>
                  <td style="background:${card};padding:24px 40px;border-top:1px solid ${line};">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td>
                          <p style="margin:0 0 4px 0;font-family:${font};font-size:11px;font-weight:500;color:${muted};line-height:1.6;">Pesan otomatis dari formulir kontak zekistudio.dev</p>
                          <p style="margin:0;font-family:${mono};font-size:10px;color:${faint};letter-spacing:0.3px;">${timestamp} WIB</p>
                        </td>
                        <td width="80" style="text-align:right;vertical-align:middle;">
                          <p style="margin:0;font-family:${mono};font-size:9px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:${border};">ZS</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

              </table>

              <!-- Sub-footer -->
              <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
                <tr>
                  <td style="padding:20px 40px 0 40px;text-align:center;">
                    <p style="margin:0;font-family:${font};font-size:10px;color:${muted};line-height:1.5;">zekistudio.dev</p>
                  </td>
                </tr>
              </table>

            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    // Send the email
    await transporter.sendMail({
      from: `"Zeki Studio Website" <${smtpUser}>`,
      to: recipient,
      replyTo: email || undefined,
      subject: emailSubject,
      html: emailHtml,
    });

    return NextResponse.json({
      success: true,
      message: "Formulir berhasil dikirim! Tim kami akan segera menghubungi Anda.",
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Terjadi kesalahan pada server.";
    console.error("Gagal mengirim email formulir:", error);
    return NextResponse.json(
      { error: "Gagal mengirim formulir. Silakan hubungi kami langsung via WhatsApp.", details: errorMessage },
      { status: 500 }
    );
  }
}