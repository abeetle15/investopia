import Link from "next/link";
import Image from "next/image";
import { EyeIcon } from "lucide-react";

export default function StartupCard({ post }: { post: StartupTypeCard }) {
  return (
    <li className="startup-card flex flex-col border-2 border-black rounded-lg p-2">
      <div className="flex justify-between">
        <p className="startup-card-date">{post._createdAt}</p>
        <div className="flex gap-2">
          <EyeIcon className="size-5 text-primary" />
          <span>{post.views}</span>
        </div>
      </div>
      <div className="flex-between mt-3 gap-5">
        <div className="flex-1">
          <Link href={`/user/${post.author._id}/`}>
            <p className="line-clamp-1 text-xl">{post.author.name}</p>
          </Link>
          <Link href={`/startup/${post._id}`}>
            <p className="line-clamp-1 text-2xl font-semibold">{post.title}</p>
            <Image
              src={post.image}
              alt="startup image"
              width={450}
              height={350}
            />
          </Link>
        </div>
      </div>
    </li>
  );
}
