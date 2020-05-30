import Document,{Head,Main,NextScript} from 'next/document'
import {
    Global
} from '../styles'
export default class MyDocument extends Document{
     render(){
         return(
             <html lang="en">
                 <Head>
                    <meta name="description" content="a site for reader text"/>
                    <meta charSet='utf-8'/>
                    <meta name='robots' content="noindex, nofollow"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                     <link
                         rel="stylesheet"
                         href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
                     />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"/>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/> 
                    {/* new */}
                    <script src="https://kit.fontawesome.com/a076d05399.js"></script>
                 </Head>
                 <body>
                     <Main style={{height:"100%"}}/>
                     <NextScript/>
                     <style global jsx>{Global}</style>
                 </body>
             </html>
         )
     }
 }
