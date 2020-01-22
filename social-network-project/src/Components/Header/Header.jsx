import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img
                src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAh1BMVEXS09UAAADV1tjT0tfU1deEhIXT09Pb29vZ2tylpaeZmpx5eXmzs7LQ1NXa290DAwPg4eMyMzPIycvq6+1aWluQkJBLS0xvb3DLzM6KiopERERjY2OVlZWnp6fi4uI+P0C7u7s4ODgpKSusra8aGhlTU1IfHx+4uLhqamsREhR8fH1gYGIVFhdN8mApAAAGcElEQVR4nO2bC1ebMBSACaZJ+hBS1tZisWqrVp3///ctQB5EKRWqhbtzv7MzXUpCviYkNwkLgv+csO8K/DpoCB80hA8awgcN4YOG8EFD+KAhfNAQPmgIHzSEDxrCBw3hg4bwQUP4oCF80BA+aAgfNIQPGsIHDeGDhvBBQ/igIXzQED5oCB80hA8awgcN4YOG8EFD+KAhfNAQPmgIHzSEDxrCBw3hg4bwQUP4oCF80BA+aAgfNIQPGsIHDeHzy4b0zEyd8vu0M6SRKGm8Mw2EIeymGOrs0aUNw3Q3L9hNGvOJxVxfdxN1qZSY6vu8jM/vY+0MR0TTaMj4rbnubzfDG5P/0obiQoaRMxRd8nv8tqHsUqkIUhuiYS19GV5dfdOQRtZw0/45vL4evmEgHs11i//UMEgM6/ZT9tAMaa0CNXxJ1z9rb1B+OiRDKiIRrGkUfYnNaKgxH1BhUsq7qoyeJlUp6t+qQDoUQ6FGzGR0+0RIPN+MGWfMXcjYflmSHrRGkuqUcZ6RLVcf5FZqR8ZUUdnzThX7skoTVRQfgmEo1hvieOeVghifmvSsTKYzk/AcBXxc/LaS5vvgSbWozZoPwlDOKpWK1Z+Zm/kqhvp5De3VCxnpQlamDfnSFKLZbwdgOD4QD1W9pVX8akgrhhMSx64NaRBtvhR19963YUxG1e88T8kVzdzXaEiJZxjIhV9S8a/Hvg2PMOOs1vDqyhm+2g5YGNIobSxyUIYxeWOnDW3rlM8hfWgU7NOw6FmL6XRVTZnyk4b62li3obw3fTT+XN4ADDM1S4stq7Yro98yLKTulWH44JJeJkwKIYPsQz+oPRuSp6RYfqvZ7MGNFOX0d7oNn14n45n6SLxq3ZjccP0Uc14Ze/obSwlJbGQaHmyNVtFJQ9U+H2MRFQEd47YFp9JGcVTa0ajPNkwrGyiRFSJF8NxkqATvqbmp66S3shqlRo8DMKzumNLEJh/KpmnqpTu3CRpmJvEh/2psnO5CoP4M/T207b1Xo2bDg7tl+K4fw7nMlx/7xHQMOe/dMPPyOaOlOGW42lbybYpBdDoLWbk5MyuKpTR8791w7xsuTXp60rBaZxWxqSD0T8jyUCHf+kj1h2IyLEPKsu8bJtcuo5oX8mGUF4bhnjya8TS8693QvzNLv234JK7dGCULQ7IrA9rQHcSESz0B9bi28HbbuV0AZacMH2W1Dc3El3LvTlRuejYsBj/XFJTvvN7bZLiqGgrT9k++YUDfeu+lJLGCNH+CTNsm9MR8uKgamsctJhPvRLLyNFz0ZMYzfN7arSeqQhAdtr2IoI0hWxtD4m080rX79Qy3ks6Rd2o3LVQYaRYDryfjUs8w2JYzu8q+E15ruQ3XsxW7r4BHMu9ZVOTrA8Ps5NrCb0Nmxkz1916GTU2mQvWaLebfNFRfe5bIKEk/3FpnfnoF/MmQu+LI/WR9/JTDHBNc0NB5xXaVfndkFyM41ksZT836sPg5P6JoY/tp+5Gn4/lhDTF5Nnu8jbuJ116R0a5axtMxQ7PMGvH6Cy5iSN7MU9LGsLLyyr+kI2dVdpmVXcgwJmn8db/Urn2a97yvP5U5q/bzI/Of3TWesdrPf9xQ1Xxtog7Dbm2LamNIA/EQu62n+hNVGpjs68sZcubtI6ohoDKSt2lD9SH763pCUtdNhVmdzeUvG9qFqVoBU7m3p/VkmnhRlzv/y8peZ+M6e+JUhUYPNnS/rWnEkJpP0+bXzeor3epq+UeTH3BSuR6PRu+j7CCFVwx115n6CpMga2d1Gm33S1VWuq/rpdJ2lw6H5ue8m0jzk13Ow3wLoqbajDH2/T7FmCqq9k2/fHMxNl28QzXbGl7leDU74sHaGh65OrRrRTVat6urLqBthosa0jA67Gz41O1Fx/NXmL+Emka2nN3ZRzBWAU+XwHvAhmL5bHZNdR/ttpAarGH5kqmNdmKyF93WigM3dDHFuNNDGEAxJOTQVRCCoWrA2zPqCcCQvI07vaWqGb7h4zgSR14Q/BYDNnwl8XyRJfLMKg7XkK6Llx8vuZt4aX7g/8vkDNjwh0BD+KAhfNAQPmgIHzSEDxrCBw3hg4bwQUP4oCF80BA+aAgfNIQPGsIHDeGDhvBBQ/igIXzQED5oCB80hA8awgcN4YOG8EFD+KAhfNAQPmgIHzSEDxrCBw3hg4bwQUP4oCF80BA+aAgfNIRP+A8vmVUrjLmKEwAAAABJRU5ErkJggg=='/>
        <div className={s.loginBlock}>
            {props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
        </header>
    );
};

export default Header;