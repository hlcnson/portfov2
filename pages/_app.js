// Đây là nơi tập trung thiết lập style cho toàn ứng dụng.
// Mỗi component trong thư mục page sẽ được wrap vào component
// này trước khi được load.
// Việc wrap các component như vậy giúp tập trung về một đầu
// mối các thiết lập về CSS, styling thống nhất trong toàn ứng dụng


import React from 'react'
// Cơ chế của Nextjs, App component đóng vai trò như một wrapper,
// tự động wrap các component trong thư mục pages vào App để thành 
// component một component có chung các thiết lập tại đây mỗi khi chúng
// được load
import App from 'next/app'

// Import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// Module chứa các custom styling cho toàn ứng dụng.
// Import module CSS tự tạo sau bootstrap để có thể overwrite
// thiết lập của bootstrap.
import '../styles/main.scss'



class MyApp extends App {
    // Only uncomment this method if you have blocking data requirements for
    // every single page in your application. This disables the ability to
    // perform automatic static optimization, causing every page in your app to
    // be server-side rendered.
    //
    static async getInitialProps(appContext) {
        let appProps = {}

        if (appContext.Component.getInitialProps){
            // calls page's `getInitialProps` and fills `appProps.pageProps`
            appProps = await App.getInitialProps(appContext);
        }
        
        
        return { ...appProps }
    }

    // Render component trong thư mục pages mỗi khi chúng được kích
    // hoạt.
    render() {
        const { Component, pageProps } = this.props
        // Trong bối cảnh này, Component chính là component
        return <Component {...pageProps} />
    }
}

export default MyApp