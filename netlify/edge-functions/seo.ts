
import { Context } from "https://edge.netlify.com";

const botUserAgents = [
  /bot/i,
  /crawler/i,
  /spider/i,
  /crawl/i,
  /slurp/i,
  /facebookexternalhit/i,
  /twitterbot/i,
  /linkedinbot/i,
  /embedly/i,
  /quora link preview/i,
  /showyoubot/i,
  /outbrain/i,
  /pinterest/i,
  /vkshare/i,
  /W3C_Validator/i,
  /redditbot/i,
  /applebot/i,
  /WhatsApp/i,
  /slackbot/i,
  /TelegramBot/i,
  /Discordbot/i,
  /Preview/i,
  /nuzzel/i,
  /Xenu/i,
  /SiteSucker/i,
];

export default async (req: Request, context: Context) => {
  const userAgent = req.headers.get("user-agent") || "";
  const isBot = botUserAgents.some((bot) => bot.test(userAgent));
  const url = new URL(req.url);
  const urlPath = url.pathname;

  // Log for debugging
  console.log(`Request from: ${userAgent}, Path: ${urlPath}, IsBot: ${isBot}`);

  if (isBot) {
    // Construct the full URL for Prerender.io
    const prerenderUrl = `https://service.prerender.io/https://duurzaamwonen.info${urlPath}`;
    
    try {
      console.log(`Fetching prerendered content from: ${prerenderUrl}`);
      
      const prerendered = await fetch(prerenderUrl, {
        headers: {
          "User-Agent": userAgent,
          "X-Prerender-Token": "iCYcttsrVusf8Vlp8emm",
        },
        timeout: 10000, // 10 second timeout
      });

      if (prerendered.ok) {
        const html = await prerendered.text();
        
        // Add some basic SEO headers
        return new Response(html, {
          status: 200,
          headers: {
            "Content-Type": "text/html; charset=utf-8",
            "Cache-Control": "public, max-age=3600", // Cache for 1 hour
            "X-Prerendered": "true",
          },
        });
      } else {
        console.error(`Prerender failed with status: ${prerendered.status}`);
      }
    } catch (err) {
      console.error("Prerender fetch failed:", err);
    }
  }

  // Human or fallback: pass to SPA
  return context.next();
};
