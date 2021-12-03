import Link from 'next/link'

const three = () => {
    return (
        <>
            <h1>Blog number 3</h1>
            <Link href='/blogs/1'>Go to blog 1</Link>
        </>
    )
}

export default three