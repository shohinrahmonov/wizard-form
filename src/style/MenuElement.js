import styled from 'styled-components'

export const MenuElement = styled.div`
    position: fixed;
    bottom: 38px;
    width: 268px;
    a{
        display: inline-block;
        button{
            width: 265px;
            &.active{
                background: #5D89FF;
                p, span{
                    color: #fff;
                }
            }

        }
    }
    a:not(:last-child){
        margin-bottom: 12px;
    }
`;
