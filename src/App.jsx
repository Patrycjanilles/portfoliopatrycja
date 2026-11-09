import { Suspense, lazy } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';

const ProjectHoek = lazy(() => import('./pages/ProjectHoek'));
const ProjectSomeStuff = lazy(() => import('./pages/ProjectSomeStuff'));
const ProjectNationalGalerie = lazy(() => import('./pages/ProjectNationalGalerie'));
const ProjectSpeakly = lazy(() => import('./pages/ProjectSpeakly'));
const ProjectFridgeBook = lazy(() => import('./pages/ProjectFridgeBook'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/index.html" element={<Navigate to="/" replace />} />

          {/* Project 1: HOEK */}
          <Route path="/project1" element={<ProjectHoek />} />
          <Route path="/project1.html" element={<Navigate to="/project1" replace />} />
          <Route path="/hoek" element={<Navigate to="/project1" replace />} />

          {/* Project 2: Some Stuff */}
          <Route path="/project2" element={<ProjectSomeStuff />} />
          <Route path="/project2.html" element={<Navigate to="/project2" replace />} />
          <Route path="/some-stuff" element={<Navigate to="/project2" replace />} />

          {/* Project 3: National Galerie */}
          <Route path="/project3" element={<ProjectNationalGalerie />} />
          <Route path="/project3.html" element={<Navigate to="/project3" replace />} />
          <Route path="/national-galerie" element={<Navigate to="/project3" replace />} />

          {/* Project 4: Speakly */}
          <Route path="/project4" element={<ProjectSpeakly />} />
          <Route path="/project4.html" element={<Navigate to="/project4" replace />} />
          <Route path="/speakly" element={<Navigate to="/project4" replace />} />

          {/* Project 5: FridgeCook / FridgeBook */}
          <Route path="/fridgebook" element={<ProjectFridgeBook />} />
          <Route path="/fridgebook.html" element={<Navigate to="/fridgebook" replace />} />
          <Route path="/project5" element={<Navigate to="/fridgebook" replace />} />

          {/* Subpages */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about.html" element={<Navigate to="/about" replace />} />

          <Route path="/contact" element={<ContactPage />} />
          <Route path="/contact.html" element={<Navigate to="/contact" replace />} />

          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog.html" element={<Navigate to="/blog" replace />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
