import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { HomePage } from '@/app/pages/HomePage';
import { TechniquesPage } from '@/app/pages/TechniquesPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#EFE6D5]">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/techniques" element={<TechniquesPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}