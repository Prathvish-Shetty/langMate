import { generateStreamToken } from "../lib/stream.js";

export async function getStreamToken(req, res) { // this token is required by the authenticated user to use the stream features like chat and video call
  try {
    const token = generateStreamToken(req.user.id)
    res.status(200).json({token})
  } catch (error) {
    console.log("Error in getStreamToken controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}