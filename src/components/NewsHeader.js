import React from 'react';
import logo from '../img/y18.gif';

class NewsHeader extends React.Component {

    getLogo() {
        return (
            <img src={logo} alt="Logo"  className="newsHeader-logo"/>
        )
    }

    getTitle() {
        return (
            <div className="newsHeader-title">
                <a className="newsHeader-textLink" href="">Hacker News</a>
            </div>
        )
    }

    getNavLinks() {
        const navLinks = [
            {
                name: 'new',
                url: 'newest'
            },
            // {
            //     name: 'threads',
            //     url: 'threads'
            // },
            {
                name: 'comments',
                url: 'newcomments'
            },
            {
                name: 'show',
                url: 'show'
            },
            {
                name: 'ask',
                url: 'ask'
            },
            {
                name: 'jobs',
                url: 'jobs'
            },
            {
                name: 'submit',
                url: 'submit'
            }
        ];

        const navItems = navLinks.map((navLink) =>
            <a key={navLink.url} className="newsHeader-navLink newsHeader-textLink" href={'https://news.ycombinator.com/' + navLink.url}>
                {navLink.name}
            </a>);

        return (
            <div className="newsHeader-nav">
                {navItems}
            </div>
        )
    }

    getLogin() {
        return (
            <div className="newsHeader-login">
                <a className="newsHeader-textLink" href="https://news.ycombinator.com/login?goto=news">login</a>
            </div>
        )
    }

    render() {
        return(
            <div className="newsHeader">
                {this.getLogo()}
                {this.getTitle()}
                {this.getNavLinks()}
                {this.getLogin()}
            </div>
        )
    }
}

export default NewsHeader;
