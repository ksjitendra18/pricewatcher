import jwt from "jsonwebtoken";
const secret = process.env.JWT_SECRET;
import prisma from "../utils/prisma";
async function fetchUserAuthStatus(token: string) {
  const decoded: any = jwt.verify(token, secret!);

  const user = await prisma.user.findUnique({
    where: { userId: decoded.userId },
    select: { id: true, email: true, userId: true },
  });

  console.log("usr", user);

  return user;
}

export default fetchUserAuthStatus;
