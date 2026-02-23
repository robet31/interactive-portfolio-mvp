import type { Post, Experience, Project, Certification } from './types';

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    title: 'Software Engineering Intern',
    organization: 'PT. Artavista Karya Teknologi',
    period: 'Jun 2025 - Sep 2025',
    description: 'Berkontribusi dalam pengembangan aplikasi web full-stack menggunakan React dan Node.js. Terlibat dalam proses code review, CI/CD pipeline, serta implementasi fitur baru pada platform internal perusahaan.',
    tags: ['React', 'Node.js', 'TypeScript', 'PostgreSQL'],
    type: 'internship',
    image: 'https://images.unsplash.com/photo-1621036579842-9080c7119f67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGVuZ2luZWVyaW5nJTIwaW50ZXJuJTIwb2ZmaWNlJTIwY29kaW5nfGVufDF8fHx8MTc3MTYxNTM5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    startDate: '2025-06',
  },
  {
    id: '2',
    title: 'Samsung Innovation Campus - AI-based IoT',
    organization: 'Samsung Electronics',
    period: 'Mar 2025 - Jun 2025',
    description: 'Program intensif yang berfokus pada penerapan Artificial Intelligence dalam ekosistem Internet of Things. Membangun prototipe perangkat pintar dengan sensor dan model prediksi menggunakan TensorFlow Lite.',
    tags: ['AI', 'IoT', 'TensorFlow', 'Python', 'Embedded Systems'],
    type: 'program',
    image: 'https://images.unsplash.com/photo-1696041756125-257354c459a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW1zdW5nJTIwaW5ub3ZhdGlvbiUyMGNhbXB1cyUyMEFJJTIwdGVjaG5vbG9neSUyMHdvcmtzaG9wfGVufDF8fHx8MTc3MTYxNTQwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    startDate: '2025-03',
  },
  {
    id: '8',
    title: 'Hackathon Finalist - GarudaHacks 5.0',
    organization: 'GarudaHacks',
    period: 'Jan 2025 - Feb 2025',
    description: 'Finalis hackathon nasional GarudaHacks 5.0 dengan project smart agriculture dashboard. Membangun real-time monitoring system menggunakan React, FastAPI, dan IoT sensor data.',
    tags: ['Hackathon', 'React', 'FastAPI', 'IoT', 'Dashboard'],
    type: 'program',
    image: 'https://images.unsplash.com/photo-1637073849640-b283dcd9a111?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWNrYXRob24lMjBjb2RpbmclMjBjb21wZXRpdGlvbiUyMHRlYW18ZW58MXx8fHwxNzcxNzg0Nzc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    startDate: '2025-01',
  },
  {
    id: '9',
    title: 'Data Science Bootcamp',
    organization: 'DQLab Academy',
    period: 'Feb 2025 - Apr 2025',
    description: 'Bootcamp intensif data science yang mencakup Python, Pandas, machine learning, dan data visualization. Menyelesaikan capstone project analisis sentimen produk e-commerce.',
    tags: ['Data Science', 'Python', 'Pandas', 'Machine Learning'],
    type: 'program',
    image: 'https://images.unsplash.com/photo-1561089489-f13d5e730d72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc2NpZW5jZSUyMHdvcmtzaG9wJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc3MTc4NDc3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    startDate: '2025-02',
  },
  {
    id: '10',
    title: 'Freelance Web Developer',
    organization: 'Self-employed',
    period: 'Jan 2025 - Present',
    description: 'Mengambil project freelance pembuatan website company profile, landing page, dan dashboard admin untuk UMKM lokal. Menggunakan Next.js, Tailwind CSS, dan Supabase.',
    tags: ['Freelance', 'Next.js', 'Supabase', 'Tailwind CSS'],
    type: 'work',
    image: 'https://images.unsplash.com/photo-1769605767810-bb271f5d7197?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVlbGFuY2UlMjB3ZWIlMjBkZXZlbG9wZXIlMjBsYXB0b3AlMjBjYWZlfGVufDF8fHx8MTc3MTc4NDc3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    startDate: '2025-01',
  },
  {
    id: '3',
    title: 'Asisten Laboratorium Pemrograman',
    organization: 'Universitas - Fakultas Ilmu Komputer',
    period: 'Feb 2024 - Present',
    description: 'Membimbing mahasiswa dalam praktikum pemrograman dasar hingga lanjutan. Menyusun modul ajar, memeriksa tugas, dan memberikan asistensi dalam bahasa C++, Java, dan Python.',
    tags: ['Teaching', 'C++', 'Java', 'Python'],
    type: 'work',
    image: 'https://images.unsplash.com/photo-1587691592099-24045742c181?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGluZyUyMGFzc2lzdGFudCUyMHByb2dyYW1taW5nJTIwbGFiJTIwdW5pdmVyc2l0eXxlbnwxfHx8fDE3NzE2MTU0MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    startDate: '2024-02',
  },
  {
    id: '4',
    title: 'Core Team Member - GDSC',
    organization: 'Google Developer Student Clubs',
    period: 'Sep 2024 - Present',
    description: 'Aktif mengelola acara workshop teknologi, hackathon, dan study jam. Berkontribusi dalam penyelenggaraan Google Solution Challenge dan membangun komunitas developer mahasiswa.',
    tags: ['Community', 'Leadership', 'Google Cloud', 'Events'],
    type: 'organization',
    image: 'https://images.unsplash.com/photo-1560439514-0fc9d2cd5e1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBjb21tdW5pdHklMjBoYWNrYXRob24lMjBtZWV0dXAlMjBldmVudHxlbnwxfHx8fDE3NzE2MTU0MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    startDate: '2024-09',
  },
  {
    id: '5',
    title: 'S1 Sistem Informasi',
    organization: 'Universitas - Fakultas Ilmu Komputer',
    period: '2022 - Present',
    description: 'Mendalami bidang Sistem Informasi dengan fokus pada pengembangan perangkat lunak, analisis data, dan tata kelola IT. Aktif mengikuti riset dan kompetisi teknologi.',
    tags: ['Information Systems', 'Software Engineering', 'Data Analytics'],
    type: 'education',
    image: 'https://images.unsplash.com/photo-1758270704534-fd9715bffc0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwc3R1ZGVudCUyMGluZm9ybWF0aW9uJTIwc3lzdGVtc3xlbnwxfHx8fDE3NzE2MTU0MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    startDate: '2022-08',
  },
  {
    id: '6',
    title: 'Volunteer IT Mentor - Coding for Kids',
    organization: 'Komunitas Literasi Digital',
    period: 'Jul 2024 - Dec 2024',
    description: 'Menjadi mentor sukarela untuk program pengenalan coding bagi anak-anak usia 10-15 tahun. Mengajarkan dasar-dasar pemrograman menggunakan Scratch dan Python dengan pendekatan game-based learning.',
    tags: ['Mentoring', 'Scratch', 'Python', 'Education'],
    type: 'volunteer',
    image: 'https://images.unsplash.com/photo-1690192435015-319c1d5065b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwdGVhY2hpbmclMjB3b3Jrc2hvcCUyMG1lbnRvcmluZ3xlbnwxfHx8fDE3NzE2MzI0OTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    startDate: '2024-07',
  },
  {
    id: '7',
    title: 'Volunteer Web Developer - NGO Website',
    organization: 'Yayasan Peduli Teknologi',
    period: 'Mar 2024 - May 2024',
    description: 'Membangun website profil dan donasi untuk organisasi nirlaba secara pro bono. Menggunakan Next.js dan Tailwind CSS dengan integrasi payment gateway untuk fitur donasi online.',
    tags: ['Next.js', 'Tailwind CSS', 'Volunteer', 'Social Impact'],
    type: 'volunteer',
    image: 'https://images.unsplash.com/photo-1760992003927-96ac55e57296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXIlMjBjb21tdW5pdHklMjBzZXJ2aWNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzE2MzI0OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    startDate: '2024-03',
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'cert-1',
    name: 'Samsung Innovation Campus - AI-based IoT',
    organization: 'Samsung Electronics',
    issueDate: '2025-06',
    credentialId: 'SIC-AI-IOT-2025-0847',
    credentialUrl: 'https://www.credly.com/',
    image: 'https://images.unsplash.com/photo-1696041756125-257354c459a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW1zdW5nJTIwaW5ub3ZhdGlvbiUyMGNhbXB1cyUyMEFJJTIwdGVjaG5vbG9neSUyMHdvcmtzaG9wfGVufDF8fHx8MTc3MTYxNTQwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    skills: ['AI', 'IoT', 'TensorFlow Lite', 'Python', 'Edge Computing'],
  },
  {
    id: 'cert-2',
    name: 'Google Cloud Computing Foundations',
    organization: 'Google Cloud',
    issueDate: '2025-02',
    credentialId: 'GCC-FOUND-2025',
    credentialUrl: 'https://www.cloudskillsboost.google/',
    image: 'https://images.unsplash.com/photo-1728710718080-3cf64d995d2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb29nbGUlMjBjbG91ZCUyMGNvbXB1dGluZyUyMHdvcmtzaG9wfGVufDF8fHx8MTc3MTYzMjQ5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    skills: ['Google Cloud', 'Cloud Computing', 'BigQuery', 'Cloud Storage'],
  },
  {
    id: 'cert-3',
    name: 'Belajar Membuat Aplikasi Web dengan React',
    organization: 'Dicoding Indonesia',
    issueDate: '2024-11',
    expiryDate: '2027-11',
    credentialId: 'DIC-REACT-2024',
    credentialUrl: 'https://www.dicoding.com/',
    image: 'https://images.unsplash.com/photo-1565229284535-2cbbe3049123?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBib290Y2FtcCUyMGNlcnRpZmljYXRlJTIwYWNoaWV2ZW1lbnR8ZW58MXx8fHwxNzcxNjMyNDk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    skills: ['React', 'JavaScript', 'Web Development', 'SPA'],
  },
  {
    id: 'cert-4',
    name: 'Python (Basic) Certificate',
    organization: 'HackerRank',
    issueDate: '2024-08',
    credentialId: 'HR-PY-BASIC-2024',
    credentialUrl: 'https://www.hackerrank.com/certificates/',
    skills: ['Python', 'Problem Solving', 'Data Structures'],
  },
  {
    id: 'cert-5',
    name: 'Junior Web Developer',
    organization: 'BNSP (Badan Nasional Sertifikasi Profesi)',
    issueDate: '2024-06',
    expiryDate: '2027-06',
    credentialId: 'BNSP-JWD-2024-1293',
    image: 'https://images.unsplash.com/photo-1613825787302-22acac0de2fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwY2VydGlmaWNhdGlvbiUyMGJhZGdlJTIwY3JlZGVudGlhbHxlbnwxfHx8fDE3NzE2MzI0OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Smart Agriculture IoT Dashboard',
    description: 'Dashboard monitoring real-time untuk pertanian cerdas menggunakan sensor IoT. Menampilkan data suhu, kelembaban tanah, dan prediksi cuaca berbasis AI. Dibangun sebagai proyek akhir Samsung Innovation Campus.',
    image: 'https://images.unsplash.com/photo-1753039495488-434a2fe53e41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJb1QlMjBzbWFydCUyMGRldmljZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcxNjA2ODY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['IoT', 'AI', 'React', 'Python', 'MQTT'],
    category: 'AI & IoT',
  },
  {
    id: '2',
    title: 'Interactive Web Mapping Platform',
    description: 'Platform pemetaan interaktif menggunakan Leaflet.js dan OpenStreetMap API. Memvisualisasikan data spasial seperti persebaran fasilitas publik dan zona bencana dengan layer kustom yang dapat dikonfigurasi.',
    image: 'https://images.unsplash.com/photo-1736117703416-f260ee174bac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBtYXBwaW5nJTIwZ2VvZ3JhcGhpYyUyMGRhdGElMjB2aXN1YWxpemF0aW9ufGVufDF8fHx8MTc3MTYwNjg2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Leaflet.js', 'OpenStreetMap', 'GeoJSON', 'JavaScript'],
    category: 'Web Development',
  },
  {
    id: '3',
    title: 'Sentiment Analysis NLP Pipeline',
    description: 'Pipeline analisis sentimen untuk ulasan produk menggunakan teknik NLP dan Text Mining. Memproses data teks dengan preprocessing, TF-IDF vectorization, dan model klasifikasi Naive Bayes serta LSTM.',
    image: 'https://images.unsplash.com/photo-1653564142048-d5af2cf9b50f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc2NpZW5jZSUyMG1hY2hpbmUlMjBsZWFybmluZyUyMGNvZGV8ZW58MXx8fHwxNzcxNTk3ODM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Python', 'NLP', 'TensorFlow', 'scikit-learn'],
    category: 'Data Science',
  },
  {
    id: '4',
    title: 'Business Intelligence Dashboard',
    description: 'Dashboard visualisasi data bisnis menggunakan Power BI untuk menganalisis performa penjualan, tren pasar, dan KPI perusahaan. Menghubungkan data dari berbagai sumber dengan ETL pipeline.',
    image: 'https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFuYWx5dGljcyUyMGRhc2hib2FyZCUyMGNoYXJ0fGVufDF8fHx8MTc3MTYwNjg2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Power BI', 'SQL', 'DAX', 'ETL', 'Data Viz'],
    category: 'Data Analytics',
  },
];

export const SEED_POSTS: Post[] = [
  {
    id: 'seed-1',
    title: 'Membangun Pipeline NLP untuk Analisis Sentimen: Panduan Lengkap',
    slug: 'membangun-pipeline-nlp-analisis-sentimen',
    content: `<h2>Pendahuluan</h2><p>Natural Language Processing (NLP) telah menjadi salah satu cabang AI yang paling berdampak dalam dekade terakhir. Dalam artikel ini, kita akan membangun pipeline analisis sentimen dari awal menggunakan Python.</p><img src="https://images.unsplash.com/photo-1679110451343-f3e151ba42f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxweXRob24lMjBjb2RlJTIwZGF0YSUyMHNjaWVuY2UlMjBub3RlYm9va3xlbnwxfHx8fDE3NzE2MDc5MDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Python data science workflow" /><h2>Persiapan Data</h2><p>Langkah pertama adalah mengumpulkan dan mempersiapkan dataset. Kita akan menggunakan dataset ulasan produk dari e-commerce Indonesia.</p><pre><code class="language-python">import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split

# Load dataset
df = pd.read_csv('reviews.csv')
print(f"Total data: {len(df)} reviews")

# Preview data
df.head()</code></pre><h2>Text Preprocessing</h2><p>Preprocessing teks adalah tahap krusial yang menentukan kualitas model. Berikut langkah-langkahnya:</p><ol><li><strong>Case Folding</strong> - Mengubah semua teks menjadi huruf kecil</li><li><strong>Tokenization</strong> - Memecah kalimat menjadi kata-kata</li><li><strong>Stopword Removal</strong> - Menghapus kata-kata umum yang tidak bermakna</li><li><strong>Stemming</strong> - Mengubah kata ke bentuk dasar</li></ol><pre><code class="language-python">from Sastrawi.Stemmer.StemmerFactory import StemmerFactory
from Sastrawi.StopWordRemover.StopWordRemoverFactory import StopWordRemoverFactory

factory = StemmerFactory()
stemmer = factory.createStemmer()

def preprocess(text):
    text = text.lower()
    text = re.sub(r'[^a-zA-Z\\\\s]', '', text)
    text = stemmer.stem(text)
    return text</code></pre><h2>Feature Extraction dengan TF-IDF</h2><p>TF-IDF (Term Frequency-Inverse Document Frequency) mengubah teks menjadi representasi numerik yang dapat diproses oleh algoritma machine learning.</p><blockquote><p>TF-IDF memberikan bobot lebih tinggi pada kata yang sering muncul di suatu dokumen tetapi jarang muncul di dokumen lain, sehingga kata tersebut dianggap lebih diskriminatif.</p></blockquote><h2>Kesimpulan</h2><p>Pipeline NLP yang kita bangun mampu mengklasifikasikan sentimen dengan akurasi 87.3%. Langkah selanjutnya adalah mengeksplorasi model deep learning seperti LSTM dan BERT untuk meningkatkan performa.</p>`,
    cover_image_url: 'https://images.unsplash.com/photo-1653564142048-d5af2cf9b50f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc2NpZW5jZSUyMG1hY2hpbmUlMjBsZWFybmluZyUyMGNvZGV8ZW58MXx8fHwxNzcxNTk3ODM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Data Science',
    status: 'published',
    excerpt: 'Panduan langkah demi langkah membangun pipeline NLP untuk analisis sentimen menggunakan Python, dari preprocessing hingga model classification.',
    created_at: '2026-01-15T08:00:00Z',
    updated_at: '2026-01-15T08:00:00Z',
    reading_time: 8,
  },
  {
    id: 'seed-2',
    title: 'Eksplorasi Web Mapping dengan Leaflet.js dan OpenStreetMap',
    slug: 'eksplorasi-web-mapping-leaflet-openstreetmap',
    content: `<h2>Mengapa Web Mapping?</h2><p>Visualisasi data geospasial di web telah menjadi kebutuhan penting dalam berbagai domain, mulai dari urban planning hingga disaster management. Leaflet.js adalah library JavaScript ringan namun powerful untuk membuat peta interaktif.</p><img src="https://images.unsplash.com/photo-1617480088906-60b89b36f305?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmFjdGl2ZSUyMHdlYiUyMG1hcCUyMGdlb2dyYXBoaWN8ZW58MXx8fHwxNzcxNjA4MTcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Interactive web map visualization" /><h2>Setup Proyek</h2><pre><code class="language-javascript">import L from 'leaflet';

// Inisialisasi peta
const map = L.map('map').setView([-6.2088, 106.8456], 13);

// Tambahkan tile layer dari OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);</code></pre><h2>Menambahkan Layer GeoJSON</h2><p>GeoJSON adalah format standar untuk merepresentasikan fitur geografi. Kita dapat menambahkan polygon, marker, dan polyline dengan mudah.</p><pre><code class="language-javascript">// Load GeoJSON data
fetch('/data/districts.geojson')
  .then(res => res.json())
  .then(data => {
    L.geoJSON(data, {
      style: feature => ({
        fillColor: getColor(feature.properties.density),
        weight: 2,
        opacity: 1,
        color: 'white',
        fillOpacity: 0.7
      })
    }).addTo(map);
  });</code></pre><h2>Kesimpulan</h2><p>Leaflet.js memberikan fleksibilitas luar biasa untuk membangun aplikasi pemetaan web. Dengan kombinasi OpenStreetMap dan GeoJSON, kita dapat memvisualisasikan data spasial yang kompleks secara interaktif.</p>`,
    cover_image_url: 'https://images.unsplash.com/photo-1736117703416-f260ee174bac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBtYXBwaW5nJTIwZ2VvZ3JhcGhpYyUyMGRhdGElMjB2aXN1YWxpemF0aW9ufGVufDF8fHx8MTc3MTYwNjg2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Web Development',
    status: 'published',
    excerpt: 'Pelajari cara membangun peta interaktif menggunakan Leaflet.js dan OpenStreetMap API untuk memvisualisasikan data geospasial di web.',
    created_at: '2026-02-01T10:00:00Z',
    updated_at: '2026-02-01T10:00:00Z',
    reading_time: 6,
  },
  {
    id: 'seed-3',
    title: 'Implementasi Framework COBIT 2019 dalam Audit Sistem Informasi',
    slug: 'implementasi-cobit-2019-audit-sistem-informasi',
    content: `<h2>Apa itu COBIT 2019?</h2><p>COBIT (Control Objectives for Information and Related Technologies) 2019 adalah framework tata kelola dan manajemen IT yang dikembangkan oleh ISACA. Framework ini menyediakan panduan komprehensif untuk menyelaraskan strategi IT dengan tujuan bisnis organisasi.</p><img src="https://images.unsplash.com/photo-1632082017715-4f96d6b4a2ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJVCUyMGF1ZGl0JTIwY29ycG9yYXRlJTIwZ292ZXJuYW5jZXxlbnwxfHx8fDE3NzE2MDgxNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="IT audit and corporate governance" /><h2>Komponen Utama COBIT 2019</h2><p>COBIT 2019 terdiri dari beberapa komponen yang saling terkait:</p><ul><li><strong>Governance Objectives</strong> - EDM (Evaluate, Direct, Monitor)</li><li><strong>Management Objectives</strong> - APO, BAI, DSS, MEA</li><li><strong>Design Factors</strong> - 11 faktor yang mempengaruhi desain sistem tata kelola</li></ul><h2>Studi Kasus: Audit SI pada Perusahaan X</h2><p>Dalam studi kasus ini, kita menerapkan COBIT 2019 untuk mengaudit sistem informasi pada sebuah perusahaan manufaktur. Fokus audit pada domain DSS (Deliver, Service, and Support).</p><blockquote><p>Kematangan proses IT sebuah organisasi tidak hanya diukur dari teknologi yang diadopsi, tetapi juga dari seberapa baik proses tersebut didokumentasikan, dikelola, dan dioptimalkan secara berkelanjutan.</p></blockquote><h2>Rekomendasi</h2><p>Berdasarkan hasil audit, beberapa rekomendasi yang diberikan meliputi peningkatan dokumentasi SOP, implementasi monitoring otomatis, dan pelatihan berkelanjutan untuk tim IT.</p>`,
    cover_image_url: 'https://images.unsplash.com/photo-1763191213523-1489179a1088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBzdGFydHVwJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3MTYwNjg2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'IT Audit & COBIT',
    status: 'published',
    excerpt: 'Memahami implementasi framework COBIT 2019 dalam proses audit sistem informasi beserta studi kasus pada perusahaan manufaktur.',
    created_at: '2026-02-10T14:00:00Z',
    updated_at: '2026-02-10T14:00:00Z',
    reading_time: 7,
  },
  {
    id: 'seed-4',
    title: 'Catatan Perjalanan: Samsung Innovation Campus AI-IoT',
    slug: 'catatan-samsung-innovation-campus-ai-iot',
    content: `<h2>Awal Mula</h2><p>Mendapatkan kesempatan mengikuti Samsung Innovation Campus adalah salah satu pengalaman paling berharga selama masa kuliah. Program ini berfokus pada penerapan AI dalam ekosistem IoT, dan saya belajar banyak hal baru.</p><h2>Kurikulum Program</h2><p>Program berlangsung selama 3 bulan dengan modul-modul intensif:</p><ol><li>Fundamental AI & Machine Learning</li><li>Sensor & Actuator untuk IoT</li><li>Edge Computing & TensorFlow Lite</li><li>Capstone Project</li></ol><h2>Proyek Akhir: Smart Agriculture</h2><p>Tim kami membangun sistem monitoring pertanian cerdas yang menggabungkan sensor tanah, cuaca, dan kamera dengan model AI untuk deteksi penyakit tanaman. Data dikirim melalui protokol MQTT ke dashboard real-time.</p><img src="https://images.unsplash.com/photo-1744230673231-865d54a0aba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGZhcm0lMjBhZ3JpY3VsdHVyZSUyMElvVCUyMHNlbnNvcnxlbnwxfHx8fDE3NzE2MDgxNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Smart agriculture IoT monitoring system" /><pre><code class="language-python"># Contoh kode edge inference
import tflite_runtime.interpreter as tflite

interpreter = tflite.Interpreter(model_path="plant_disease_model.tflite")
interpreter.allocate_tensors()

def predict(image):
    input_details = interpreter.get_input_details()
    interpreter.set_tensor(input_details[0]['index'], image)
    interpreter.invoke()
    output = interpreter.get_tensor(
        interpreter.get_output_details()[0]['index']
    )
    return output</code></pre><h2>Refleksi</h2><p>Program ini mengajarkan saya bahwa kolaborasi lintas disiplin sangat penting. Menggabungkan hardware engineering dengan software development membuka perspektif baru dalam memecahkan masalah nyata.</p>`,
    cover_image_url: 'https://images.unsplash.com/photo-1753039495488-434a2fe53e41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJb1QlMjBzbWFydCUyMGRldmljZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcxNjA2ODY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Jurnal & Catatan',
    status: 'published',
    excerpt: 'Catatan pengalaman mengikuti Samsung Innovation Campus dengan fokus AI-based IoT, dari fundamental AI hingga membangun smart agriculture system.',
    created_at: '2026-02-18T09:00:00Z',
    updated_at: '2026-02-18T09:00:00Z',
    reading_time: 5,
  },
  {
    id: 'seed-5',
    title: 'Draft: Pengantar Deep Learning untuk Text Classification',
    slug: 'pengantar-deep-learning-text-classification',
    content: `<h2>Work in Progress</h2><p>Artikel ini sedang dalam tahap penulisan. Akan membahas penggunaan model LSTM dan Transformer untuk klasifikasi teks.</p>`,
    cover_image_url: 'https://images.unsplash.com/photo-1738255654134-1877cb984a8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBwcm9ncmFtbWluZyUyMGxhcHRvcCUyMGRhcmt8ZW58MXx8fHwxNzcxNjA2ODY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Data Science',
    status: 'draft',
    excerpt: 'Pengantar penggunaan deep learning, khususnya LSTM dan Transformer, untuk tugas text classification.',
    created_at: '2026-02-19T16:00:00Z',
    updated_at: '2026-02-19T16:00:00Z',
    reading_time: 1,
  },
  {
    id: 'seed-6',
    title: 'Log Harian - Setup Portfolio dengan TipTap Editor',
    slug: 'log-harian-setup-portfolio-tiptap-editor',
    content: `<h2>Log Harian - Setup Portfolio dengan TipTap Editor</h2>
<p>Hari ini fokus pada pengembangan fitur editor untuk platform portfolio. Target utama: integrasi TipTap v3 dengan custom node views dan image alignment.</p>

<h3>1. Setup TipTap v3 Editor</h3>
<p>Melakukan konfigurasi awal TipTap v3 dengan beberapa extension: StarterKit, Image, Link, TextAlign, dan CodeBlockLowlight. Ada beberapa perbedaan penting di v3 dibanding v2:</p>
<ul>
<li><strong>BubbleMenu</strong> di-import dari <code>@tiptap/react/menus</code> bukan <code>@tiptap/react</code></li>
<li><strong>tippyOptions</strong> sudah deprecated, tidak boleh digunakan</li>
<li>StarterKit v3 sudah include Link extension, perlu di-disable jika konfigurasi terpisah</li>
</ul>

<blockquote><p><strong>📸 INSERT IMAGE:</strong> Screenshot editor TipTap dengan toolbar lengkap<br/><em>Caption: TipTap v3 editor dengan toolbar responsif dan code block bergaya Notion</em></p></blockquote>

<pre><code class="language-typescript">// Konfigurasi extensions TipTap v3
const extensions = useMemo(() => [
  StarterKit.configure({
    codeBlock: false,
    link: false, // disable karena pakai LinkExtension terpisah
  }),
  CustomImage.configure({ allowBase64: true }),
  TextAlign.configure({ types: ['heading', 'paragraph'] }),
], []);</code></pre>

<h3>2. Notion-style Code Block</h3>
<p>Implementasi code block dengan NodeView pattern yang mirip Notion: language selector dropdown, tombol copy, dan syntax highlighting menggunakan theme Catppuccin Mocha.</p>

<h3>3. Image Alignment & Text Wrap</h3>
<p>Menambahkan fitur image alignment (left/center/right) dan text wrapping. Ketika user klik gambar, muncul floating toolbar untuk mengatur layout dan ukuran gambar.</p>

<h3>Catatan & To-Do</h3>
<ul>
<li><strong>Selesai:</strong> TipTap v3 editor dengan toolbar responsif</li>
<li><strong>Selesai:</strong> Code block Notion-style dengan 24 bahasa</li>
<li><strong>Selesai:</strong> Image alignment dan text wrapping</li>
<li><strong>Next:</strong> Integrasi Supabase Storage untuk upload gambar</li>
<li><strong>Next:</strong> Drag-to-resize pada gambar</li>
</ul>

<blockquote><p>💡 <strong>Refleksi:</strong> TipTap v3 cukup berbeda dari v2, terutama soal import path dan deprecated features. Dokumentasi resmi kadang belum lengkap, jadi perlu banyak eksperimen.</p></blockquote>`,
    cover_image_url: '',
    category: 'Daily Log',
    status: 'published',
    excerpt: 'Log pengembangan fitur editor TipTap v3 untuk platform portfolio: setup, code block Notion-style, dan image alignment.',
    created_at: '2026-02-19T09:00:00Z',
    updated_at: '2026-02-19T09:00:00Z',
    reading_time: 4,
  },
  {
    id: 'seed-7',
    title: 'Log Harian - Debugging React Router & Error Boundary',
    slug: 'log-harian-debugging-react-router-error-boundary',
    content: `<h2>Log Harian - Debugging React Router & Error Boundary</h2>
<p>Hari ini menghabiskan waktu untuk debugging error misterius <code>TypeError: r is not a function</code> yang muncul secara intermiten di production build.</p>

<h3>1. Investigasi Error</h3>
<p>Error terjadi saat navigasi antar halaman. Setelah investigasi, ditemukan beberapa penyebab:</p>
<ol>
<li>Lazy initialization lowlight yang tidak di-cache</li>
<li>Extensions array yang di-recreate setiap render</li>
<li>DOM position calculation yang gagal di edge case</li>
</ol>

<h3>2. Solusi yang Diterapkan</h3>
<p>Menerapkan beberapa fix secara bertahap:</p>
<ul>
<li><strong>ErrorBoundary</strong> component untuk graceful fallback</li>
<li><strong>Singleton pattern</strong> untuk lowlight instance</li>
<li><strong>useMemo</strong> pada extensions array</li>
<li><strong>try/catch</strong> pada kalkulasi posisi DOM</li>
</ul>

<pre><code class="language-typescript">// Singleton pattern untuk lowlight
let _lowlight: ReturnType&lt;typeof createLowlight&gt; | null = null;
function getLowlight() {
  if (!_lowlight) {
    _lowlight = createLowlight(common);
  }
  return _lowlight;
}</code></pre>

<h3>Catatan & To-Do</h3>
<ul>
<li><strong>Selesai:</strong> Error boundary implementation</li>
<li><strong>Selesai:</strong> Lowlight singleton pattern</li>
<li><strong>Selesai:</strong> useMemo optimization</li>
<li><strong>Next:</strong> Monitor error rate di production</li>
</ul>

<blockquote><p>💡 <strong>Refleksi:</strong> Minified error messages sangat sulit di-debug. Error Boundary adalah must-have untuk setiap React app.</p></blockquote>`,
    cover_image_url: '',
    category: 'Daily Log',
    status: 'published',
    excerpt: 'Log debugging TypeError misterius di React Router: investigasi root cause dan penerapan ErrorBoundary, singleton pattern, dan useMemo.',
    created_at: '2026-02-18T14:00:00Z',
    updated_at: '2026-02-18T14:00:00Z',
    reading_time: 3,
  },
];