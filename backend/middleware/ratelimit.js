import rateLimit from '@upstash/ratelimit'

export const ratelimit = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 10, // limit each IP to 10 requests per windowMs
  message: { success: false, message: "Too many requests" }
})