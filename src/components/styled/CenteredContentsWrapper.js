import styled from 'styled-components';
import { MAX_WIDTH_OF_POST_CONTENTS_PAGE } from '../../constants/style/size';

const centeredContentsWrapper = styled.div`
    box-sizing: border-box;
    padding: 20px;
    margin: 0 auto;
`;

const createContentsWrapper = (maxWidth) => {
    return styled(centeredContentsWrapper)`
        max-width: ${maxWidth};
    `;
}

export const PostContentsWrapper = createContentsWrapper(MAX_WIDTH_OF_POST_CONTENTS_PAGE);
export const MainContentsWrapper = createContentsWrapper();
