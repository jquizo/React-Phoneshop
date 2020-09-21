import React from 'react';

export default function Footer() {
    return (
        <div>
            <footer class="py-5 bg-dark text-white-50">
                <div class="container-fluid text-center">
                <small>&copy; Website by Jason Requizo {new Date().getFullYear()}</small>
                </div>
            </footer>
        </div>
    )
}

