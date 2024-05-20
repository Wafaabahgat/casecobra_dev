import { Check, Star } from "lucide-react";
import { FC } from "react";

interface User_riewProps {
  paragraph: string;
  span: string;
  complete_paragraph: string;
  S_img: string;
  name: string;
}

const User_riew: FC<User_riewProps> = ({
  paragraph,
  span,
  complete_paragraph,
  S_img,
  name
}) => {
  return (
    <>
      <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
        <div className="flex gap-0.5 mb-2">
          <Star className="h-5 w-5 text-green-600 fill-green-600" />
          <Star className="h-5 w-5 text-green-600 fill-green-600" />
          <Star className="h-5 w-5 text-green-600 fill-green-600" />
          <Star className="h-5 w-5 text-green-600 fill-green-600" />
          <Star className="h-5 w-5 text-green-600 fill-green-600" />
        </div>

        <div className="text-lg leading-8">
          <p>
            "{paragraph}
            <span className="p-0.5 bg-slate-800 text-white">{span}</span>
            {complete_paragraph}"
          </p>
        </div>

        <div className="flex gap-4 mt-2">
          <img
            className="rounded-full h-12 w-12 object-cover"
            src={S_img}
            alt="user"
          />
          <div className="flex flex-col">
            <p className="font-semibold">{name}</p>
            <div className="flex gap-1.5 items-center text-zinc-600">
              <Check className="h-4 w-4 stroke-[3px] text-green-600" />
              <p className="text-sm">Verified Purchase</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User_riew;
