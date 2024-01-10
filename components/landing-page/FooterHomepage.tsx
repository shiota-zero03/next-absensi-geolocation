const FooterHomepage = () => {
    return(
        <>
            <footer className="fixed bottom-0 w-full text-center py-2 bg-gray-900">
                <p className="text-sm">&copy; {new Date().getFullYear()} Shiota Zero. All rights reserved.</p>
            </footer>
        </>
    )
}

export default FooterHomepage;