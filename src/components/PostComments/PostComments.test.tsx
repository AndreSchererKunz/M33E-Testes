import { fireEvent, render, screen } from '@testing-library/react';
import PostComments from '.';

const addComment = (commentText: string) => {
    fireEvent.change(screen.getByTestId('comment-textarea'), { target: { value: commentText } });
    fireEvent.click(screen.getByTestId('comment-button'));
};

describe('Teste para o componente PostComments', () => {

    it('Deve renderizar o botão de comentário', () => {
        render(<PostComments />);
        expect(screen.getByTestId('comment-button')).toBeInTheDocument();
    });

    it('Deve adicionar dois comentários quando o formulário é enviado', () => {
        render(<PostComments />);
        addComment('Primeiro comentário');
        addComment('Segundo comentário');
        expect(screen.getByTestId('comment-0')).toHaveTextContent('Primeiro comentário');
        expect(screen.getByTestId('comment-1')).toHaveTextContent('Segundo comentário');
    });
});