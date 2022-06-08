import Image from 'next/image'

const Footer = () => {
    return (
        <>
            <footer className="flex h-24 w-full items-center justify-center border-t">
                <a
                className="flex items-center justify-center gap-2"
                href="https://webinoxedia.com?utm_source=yantrayug-ecom-next-app&utm_medium=next-dev-app&utm_campaign=client-web-app"
                target="_blank"
                rel="noopener noreferrer"
                >
                Powered by{' '}
                <Image src="/vercel.svg" alt="WebioxMedia Logo" width={72} height={16} />
                </a>
            </footer>
        </>
    )
}

export default Footer