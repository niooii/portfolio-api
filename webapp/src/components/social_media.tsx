interface SocialMediaProps {
    logo_url: string;
    handle: string;
    url: string;
}

export default function SocialMedia({logo_url, handle, url}: SocialMediaProps) {
    return (
        <a href={url} target="_blank" className="underline">{handle}</a>
    )
}