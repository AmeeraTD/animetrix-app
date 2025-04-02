export const Header = () => {
    return (
    <header>
    <div className='navbar'>
    <div className='left-panel'>
    <h2>Animetrix</h2>
    </div>
    JavaScript
    <div className='center-panel' id='center-panel'>

    <a href='/home' className='nav active' id='home'>
    Home

    </a>

    <a href='/insights' className='nav active' id='insights'>
    Insights
    </a>
    </div>
    
    <div className='right-panel'>
    <div className='avatar-dropdown'>
    <div className='avatar'>
    <a href='#'>username goes here</a>
    </div>
    </div>
    </div>
    </div>
    </header>
    );
    };