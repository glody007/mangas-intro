
export default function OpeningOverview({ title, author, href, src }) {
    return (
        <div class="border rounded-lg">
            <a href={href} class="flex items-start rounded"> 
                <img src={src} alt="Mangas image" class="w-[100px] h-[80px] object-cover rounded-l-md" />
                <div class="px-4 py-2" transition:name={`${title}-descrition`}>
                    <p class="font-bold text-sm">{title}</p>
                    <p class="text-xs text-slate-500">By {author}</p>
                </div>
            </a>
        </div>
    );
}