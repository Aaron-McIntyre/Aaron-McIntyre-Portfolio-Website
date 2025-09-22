export default function SkillBox({
  title,
  imageUrl,
}: {
  title: string;
  imageUrl: string;
}) {
  return (
    <div
      className="
        flex items-center 
        bg-neutral-900 rounded-4xl shadow-lg 
        w-40 h-20 sm:w-48 sm:h-24 md:w-56 md:h-28 lg:w-64 lg:h-32 
        mx-auto
      "
    >
      <div className="flex flex-1 justify-center items-center overflow-hidden">
        <img
          src={imageUrl}
          alt={`${title} Logo`}
          className="w-2/3 h-2/3 object-contain"
        />
      </div>

      <div className="flex flex-1 justify-center items-center overflow-hidden">
        <h2 className="text-sm sm:text-base md:text-lg lg:text-xl text-[var(--text)] font-medium text-center">
          {title}
        </h2>
      </div>
    </div>
  );
}
