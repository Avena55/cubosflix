import './style.css'
import dio from '../../assets/dio.jpg'

function Header() {
    return (
        <>
        <div className='header'>
            <svg className='logo-svg' width="32" height="36" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.84523 21.3983L22.5309 8.74064C23.0166 8.45862 23.6384 8.48562 24.0931 8.81864C26.1534 10.3217 27.9941 11.8458 29.2222 13.1269C29.2222 13.1269 30.2802 14.1529 30.7381 14.8039C31.4774 15.692 31.8332 16.853 31.8332 17.9811C31.8332 19.2472 31.4434 20.4442 30.6669 21.4013C30.4906 21.5723 29.8193 22.3253 29.1851 22.9403C25.4852 26.7685 15.8272 33.0929 10.7476 35.01C10.0083 35.319 8.03461 35.964 7.01065 36C6.02381 36 5.071 35.796 4.15531 35.349C3.02927 34.7339 2.14761 33.7799 1.65264 32.6488C1.33401 31.8628 0.842137 29.5047 0.842137 29.4357C0.523502 27.7526 0.2853 25.3885 0.167746 22.6283C0.146091 22.1333 0.409042 21.6533 0.84523 21.3983Z" fill="#FCBDEB"/>
            <path opacity="0.4" d="M2.29534 14.5806C1.33944 15.1416 0.136051 14.4246 0.182454 13.3475C0.296915 10.8214 0.494901 8.59529 0.736197 6.9392C0.773319 6.9032 1.26519 3.96605 1.83131 2.973C2.81815 1.12791 4.7547 -0.000145912 6.83665 -0.000145912H7.00989C8.35248 0.032855 11.2078 1.16091 11.2078 1.22991C12.6463 1.79694 14.5241 2.75699 16.5442 3.91205C17.4537 4.43408 17.4753 5.71514 16.5658 6.24617L2.29534 14.5806Z" fill="#F089D3"/>
            </svg>
            <div className='search-container'>
                <input className='searchbar' type='text' placeholder='Pesquise filmes...' />
                <svg className='search-svg' width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="6.84448" cy="6.84448" r="5.99243" stroke="white" strokeWidth="1.00001" strokeLinecap="round" strokeLinejoin="round"/>
                <path opacity="0.4" d="M11.0122 11.3232L13.3616 13.6665" stroke="white" strokeWidth="1.00001" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            <div className='item-container'>
                Bem vindo Dio
                <img src={dio} alt="profile" />

            </div>

        </div>
        </>
    );
}

export default Header;