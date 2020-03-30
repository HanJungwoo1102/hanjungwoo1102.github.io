import styled from 'styled-components';
import { MAX_WIDTH_OF_POST_CONTENTS_PAGE } from '../../constants/style/size';

const centeredContentsWrapper = styled.div`
    box-sizing: border-box;
    padding: 20px;
    margin: 0 auto;
`;

export const PostContentsWrapper = styled(centeredContentsWrapper)`
    max-width: ${MAX_WIDTH_OF_POST_CONTENTS_PAGE};
`;

export const MainContentsWrapper = styled(centeredContentsWrapper)`
    max-width: 1360px;
`;

export const CategoryContentsWrapper = styled(centeredContentsWrapper)`
    max-width: 1360px;
`;
