import React from 'react'
import { Link } from 'react-router-dom'
import './header.scss'

export const Header = () => (
    <div className="header">
        <Link to="/">
            wenyi chen
        </Link>
        <div>
            software engineer @ aws
        </div>
    </div>
)