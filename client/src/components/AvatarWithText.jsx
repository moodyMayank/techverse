import userImage from "../assets/user.png";

const AvatarWithText = ({ username }) => {
  return (
    <div className="flex items-center space-x-2 cursor-pointer">
      <div className="relative w-10 h-10 overflow-hidden">
        <img
          className="absolute inline-block object-cover rounded-full"
          src={userImage}
          alt="User-Name"
        />
      </div>

      <span className="flex flex-col">
        <span className="text-lg font-medium text-gray-900 ">{username}</span>
      </span>
    </div>
  );
};

export default AvatarWithText;
