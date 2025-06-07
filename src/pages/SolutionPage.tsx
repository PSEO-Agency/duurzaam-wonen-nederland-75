
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import SolutionTemplate from '@/components/templates/SolutionTemplate';
import LoadingScreen from '@/components/LoadingScreen';
import { useSolution, useRelatedSolutions } from '@/hooks/useSolutions';

const SolutionPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const { 
    data: solution, 
    isLoading: isLoadingSolution, 
    error: solutionError 
  } = useSolution(slug || '');
  
  const { 
    data: relatedSolutions = [],
    isLoading: isLoadingRelated 
  } = useRelatedSolutions(
    solution?.id || '', 
    solution?.category_id
  );

  if (isLoadingSolution) {
    return <LoadingScreen />;
  }

  if (solutionError || !solution) {
    return <Navigate to="/404" replace />;
  }

  return (
    <SolutionTemplate 
      solution={solution} 
      relatedSolutions={relatedSolutions}
    />
  );
};

export default SolutionPage;
