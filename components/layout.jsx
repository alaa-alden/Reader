import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'
import Link from 'next/link'
import {
    Style_Root,
    Style_Header,
    Style_Main,
    Style_Footer,
} from '../styles'
Router.onRouteChangeStart=url=>{
    NProgress.start()
}
Router.onRouteChangeComplete=()=>NProgress.done()
Router.onRouteChangeError=()=>NProgress.done()
const active_style={
    backgroundColor:"#29d",
    borderSize:"10px"
}
const Layout=({children
    // ,pageProgs:{auth}
 })=>{
    const [Style_TextLink, setStyle_TextLink]=React.useState({})
    const [Style_ImageLink, setStyle_ImageLink] = React.useState({})
    const [Style_FileLink, setStyle_FileLink] = React.useState({})
    React.useEffect(() => {
        // for s e , it will take s s
        switch(Router.pathname){
            case '/text':
                setStyle_TextLink(active_style)
                break
            case '/image':
                setStyle_ImageLink(active_style)
                break
            case '/file':
                setStyle_FileLink(active_style)
                break
            default:break;
        }
    }, [])
    return(
        <div id='root'>
            <Head>
                <title>Reader</title>
            </Head>
            {/* for header */}
            <header>
                <nav>
                    <input type="checkbox" id="check"/>
                        <label htmlFor="check" className="checkbtn">
                        <i aria-hidden className='fas fa-bars'></i>
                        </label>
                    <label className="logo">Reader</label>
                    <ul>
                        <li><Link href="/text"><a style={Style_TextLink}>Text</a></Link></li>
                        <li><Link href='/image'><a style={Style_ImageLink}>Image</a></Link></li>
                        <li><Link href='/file'><a href="#" style={Style_FileLink}>File</a></Link></li>
                        {/* {1 ? 
                        // user._id ?
                            (
                                // auth navigation
                                <li><Link href='/'><a href="#">Profile</a></Link></li>
                            ):
                            (
                                //unauth navigation
                                <li><Link href='/'><a href="#">Sing In</a></Link></li>
                            )                            
                        }
                        {1 ? 
                            // user._id ?
                            (
                                // auth navigation
                                <li><Link href='/'><a href="#">Sign Out</a></Link></li>
                            ):
                            (
                                //unauth navigation
                                <li><Link href='/'><a href="#">Sign Up</a></Link></li>
                            )                            
                        } */}
                        </ul>
                </nav>
            </header>
            {/* for main */}
            <main>
                {children}
            </main>
            {/* for footer */}
            <footer>&copy; {new Date().getFullYear()}</footer>
            <style jsx>{Style_Root}</style>
            <style jsx>{Style_Header}</style>
            <style jsx>{Style_Main}</style>
            <style jsx>{Style_Footer}</style>
        </div>
    )
}
export default Layout
