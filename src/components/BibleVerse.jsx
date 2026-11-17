import React from 'react';
import { FloralDivider } from './GoldDecorations';
import { Heart } from 'lucide-react';

const BibleVerse = () => {
  return (
    <section id="verse" className="bible-verse-section py-2 py-md-3 position-relative">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-9 text-center">
            <div className="verse-card p-3 p-sm-4 position-relative">
              <div className="verse-icon-wrapper mb-2">
                <Heart size={18} className="text-gold-champagne fill-gold-subtle" />
              </div>

              <blockquote className="bible-verse-quote mb-1">
                &ldquo;He hath made everything beautiful in His time&rdquo;
              </blockquote>

              <p className="bible-verse-reference text-gold-metallic small mb-2">
                ECCLESIASTES 3:11
              </p>

              <FloralDivider className="my-2" />

              <p className="welcome-message text-ivory mb-0 small leading-normal">
                With grateful hearts, we invite you to celebrate as we begin our forever together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BibleVerse;
