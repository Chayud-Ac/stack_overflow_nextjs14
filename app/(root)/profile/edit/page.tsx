import { getUserById } from "@/lib/actions/user.action";
import { auth } from "@clerk/nextjs/server";
import { ParamsProps } from "@/types";
import Profile from "@/components/forms/Profile";

const Page = async ({ params }: ParamsProps) => {
  const { userId } = auth(); // get clerk userId from auth which is provided by clerk nextjs
  if (!userId) {
    return null;
  }

  const mongoUser = await getUserById({ userId });

  return (
    <>
      <h1 className="h1-bold text-dark100_light900">Edit Profile</h1>
      <div className="mt-9">
        <Profile clerkId={userId} user={JSON.stringify(mongoUser)} />
      </div>
    </>
  );
};

export default Page;
