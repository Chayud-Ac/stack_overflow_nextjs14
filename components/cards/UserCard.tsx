import { getTopInteractedTags } from "@/lib/actions/tag.actions";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";
import RenderTag from "../shared/RenderTag";

interface Props {
  user: {
    _id: string;
    clerkId: string;
    picture: string;
    name: string;
    username: string;
  };
}

// {
//   _id: '668ffed59dcfabbdc1a63808',
//   clerkId: 'user_2j6gPQOsDp9MONhwmrfCRxcB7a4',
//   name: 'Chayud',
//   username: 'Ac_Chayud',
//   email: 'ac.chayud02@gmail.com',
//   picture:
//     'https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yajZnUE5tSkxYdTFGTTc3MDN2ZFRQUE5TdlAifQ',
//   reputation: 0,
//   saved: [ '6699278b25ed602a972e355a', '669a7f8efc9642187dd166f3' ],
//   joinedAt: '2024-07-11T15:48:37.488Z',
//   __v: 0,
//   bio: 'Just ordinary person who trying to be better and better',
//   location: 'Bangkok',
//   portfolioWebsite: 'https://github.com/Chayud-Ac'
// }

const UserCard = async ({ user }: Props) => {
  const interactedTags = await getTopInteractedTags({ userId: user._id });

  return (
    <div className="shadow-light100_darknone w-full max-xs:min-w-full xs:w-[260px]">
      <div className="background-light900_dark200 light-border flex w-full flex-col items-center justify-center rounded-2xl border p-8">
        <Link href={`/profile/${user.clerkId}`}>
          <Image
            src={user.picture}
            alt="user profile picture"
            width={100}
            height={100}
            className="rounded-full"
          />
        </Link>

        <div className="mt-4 text-center">
          <h3 className="h3-bold text-dark200_light900 line-clamp-1">
            {user.name}
          </h3>
          <p className="body-regular text-dark500_light500 mt-2">
            @{user.username}
          </p>
        </div>

        <div className="mt-5">
          {interactedTags.length > 0 ? (
            <div className="flex items-center gap-2">
              {interactedTags.map((tag) => (
                <RenderTag key={tag._id} _id={tag._id} name={tag.name} />
              ))}
            </div>
          ) : (
            <Badge>No tags yet</Badge>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
