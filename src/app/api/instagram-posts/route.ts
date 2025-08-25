import { NextResponse } from 'next/server';

interface InstagramPost {
  id: string;
  media_url: string;
  permalink: string;
  caption: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  timestamp: string;
  like_count?: number;
  comments_count?: number;
}

interface InstagramApiResponse {
  data: Array<{
    id: string;
    media_url: string;
    permalink: string;
    caption: string;
    media_type: string;
    timestamp: string;
    like_count?: number;
    comments_count?: number;
  }>;
  paging: {
    cursors: {
      before: string;
      after: string;
    };
    next: string;
  };
}

export async function GET() {
  try {
    // Instagram Basic Display API configuration
    const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
    const userId = process.env.INSTAGRAM_USER_ID;
    
    if (!accessToken || !userId) {
      console.warn('Instagram API credentials not configured, using mock data');
      return NextResponse.json(getMockPosts());
    }

    // Fetch posts from Instagram API
    const url = `https://graph.instagram.com/me/media?fields=id,media_url,permalink,caption,media_type,timestamp,like_count,comments_count&access_token=${accessToken}&limit=12`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Instagram API error: ${response.status}`);
    }
    
    const data: InstagramApiResponse = await response.json();
    
    // Transform the data to match our interface
    const posts: InstagramPost[] = data.data.map(post => ({
      id: post.id,
      media_url: post.media_url,
      permalink: post.permalink,
      caption: post.caption || '',
      media_type: post.media_type as 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM',
      timestamp: post.timestamp,
      like_count: post.like_count,
      comments_count: post.comments_count
    }));
    
    return NextResponse.json(posts);
    
  } catch (error) {
    console.error('Error fetching Instagram posts:', error);
    
    // Return mock data as fallback
    return NextResponse.json(getMockPosts());
  }
}

function getMockPosts(): InstagramPost[] {
  return [
    {
      id: "1",
      media_url: "/images/instagram/post1.jpg",
      permalink: "https://www.instagram.com/p/example1/",
      caption: "Transform your skin with our advanced treatments. Book your consultation today! ✨ #Dermatology #SkinCare #DrJaishreeSharad",
      media_type: "IMAGE",
      timestamp: "2024-01-15T10:30:00Z",
      like_count: 1247,
      comments_count: 89
    },
    {
      id: "2",
      media_url: "/images/instagram/post2.jpg",
      permalink: "https://www.instagram.com/p/example2/",
      caption: "Natural beauty starts with healthy skin. Our PRP therapy stimulates your body's own healing factors. 🌟 #PRPTherapy #NaturalHealing",
      media_type: "IMAGE",
      timestamp: "2024-01-14T15:45:00Z",
      like_count: 892,
      comments_count: 67
    },
    {
      id: "3",
      media_url: "/images/instagram/post3.jpg",
      permalink: "https://www.instagram.com/p/example3/",
      caption: "Laser treatments for precise skin rejuvenation. Advanced technology for optimal results. 🔬 #LaserTreatment #SkinRejuvenation",
      media_type: "IMAGE",
      timestamp: "2024-01-13T12:20:00Z",
      like_count: 1567,
      comments_count: 123
    },
    {
      id: "4",
      media_url: "/images/instagram/post4.jpg",
      permalink: "https://www.instagram.com/p/example4/",
      caption: "Chemical peels for radiant skin. From gentle exfoliation to intensive resurfacing. ✨ #ChemicalPeels #SkinCare",
      media_type: "IMAGE",
      timestamp: "2024-01-12T09:15:00Z",
      like_count: 743,
      comments_count: 45
    },
    {
      id: "5",
      media_url: "/images/instagram/post5.jpg",
      permalink: "https://www.instagram.com/p/example5/",
      caption: "Botox and fillers for natural-looking results. Expert techniques for facial rejuvenation. 💉 #Botox #DermalFillers",
      media_type: "IMAGE",
      timestamp: "2024-01-11T14:30:00Z",
      like_count: 1123,
      comments_count: 78
    },
    {
      id: "6",
      media_url: "/images/instagram/post6.jpg",
      permalink: "https://www.instagram.com/p/example6/",
      caption: "Your journey to beautiful skin starts here. Professional care, proven results. 🌸 #Dermatologist #SkinHealth",
      media_type: "IMAGE",
      timestamp: "2024-01-10T11:00:00Z",
      like_count: 987,
      comments_count: 56
    }
  ];
}
