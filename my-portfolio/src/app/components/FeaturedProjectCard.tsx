export default function FeaturedProjectCard({ 
    title, 
    description, 
    imageUrl, 
    projectLink, 
    tags 
}: { 
    title: string; 
    description: string; 
    imageUrl: string; 
    projectLink: string; 
    tags: string[]; 
}) {
    return (

            <div className="h-100 w-full rounded-2xl overflow-hidden shadow-lg bg-neutral-900 border-neutral-900 border">
                <img className="w-full h-60" src={imageUrl} alt="Project Image" />
                <div className="px-3 py-3">
                    <p className="font-bold text-2xl text-[var(--text)]">{title}</p>
                    <p className="text-[var(--text-muted)] text-xl">
                        {description}
                    </p>
                </div>
                <div className="px-2 pb-2 pt-2">
                    {tags.map((tag, index) => (
                        <span key={index} className="inline-block bg-[var(--background)] rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2">{tag}</span>
                    ))}
                </div>
            </div>

    );
}