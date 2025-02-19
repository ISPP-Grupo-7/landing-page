import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLocalStorage } from '@/hooks/use-local-storage';
import { Star, User } from 'lucide-react';

type Comment = {
  id: string;
  text: string;
  author: string;
  date: string;
  rating: number;
};

type CommentsProps = {
  explorationId: string;
};

export default function Comments({ explorationId }: CommentsProps) {
  const [comments, setComments] = useLocalStorage<Comment[]>(`comments-${explorationId}`, []);
  const [newComment, setNewComment] = useState('');
  const [rating, setRating] = useState(5);

  const handleAddComment = () => {
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: Date.now().toString(),
      text: newComment,
      author: 'Usuario Anónimo', // En un caso real, esto vendría del usuario autenticado
      date: new Date().toISOString(),
      rating
    };

    setComments([...comments, comment]);
    setNewComment('');
    setRating(5);
  };

  return (
    <div className="space-y-6">
      <div className="glass-panel p-6 rounded-xl">
        <h3 className="text-xl font-bold mb-4">Comentarios ({comments.length})</h3>
        
        {/* Formulario de nuevo comentario */}
        <div className="space-y-4 mb-6">
          <div className="flex items-center gap-2 mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                className="focus:outline-none"
              >
                <Star
                  className={`w-6 h-6 ${
                    star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                  }`}
                />
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <Input
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Escribe tu comentario..."
              className="flex-1"
            />
            <Button onClick={handleAddComment}>
              Comentar
            </Button>
          </div>
        </div>

        {/* Lista de comentarios */}
        <div className="space-y-4">
          {comments.map((comment) => (
            <div key={comment.id} className="border-b border-gray-100 pb-4 last:border-0">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{comment.author}</p>
                    <p className="text-sm text-gray-500">
                      {new Date(comment.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  {[...Array(comment.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600">{comment.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 