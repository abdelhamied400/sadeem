export type Tag = { color: string; text: string };

export function TagList({ tags }: { tags: readonly Tag[] }) {
  return (
    <ul className="-mx-2.5 flex list-none flex-wrap items-center p-0">
      {tags.map((tag) => (
        <li
          key={tag.text}
          className="my-2.5 px-2.5 text-lg text-black lg:text-2xl"
        >
          <span className="inline-block rounded-[10px] bg-white px-5 py-4 text-base transition-shadow duration-300 hover:shadow-[0_15px_40px_rgba(0,0,0,0.05)] xl:px-[30px] xl:py-[22px] xl:text-[18px]">
            <span
              className="inline-block rounded-[5px] px-[3px] leading-[25px]"
              style={{ backgroundColor: tag.color }}
            >
              {tag.text}
            </span>
          </span>
        </li>
      ))}
      <li className="my-2.5 px-2.5 text-lg text-black lg:text-2xl">&amp; more…</li>
    </ul>
  );
}
