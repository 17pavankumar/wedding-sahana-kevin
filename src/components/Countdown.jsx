import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Heart, Download, ExternalLink } from 'lucide-react';
import { FloralDivider } from './GoldDecorations';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPassed: false
  });

  useEffect(() => {
    const targetDate = new Date('2026-12-12T16:00:00+05:30').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isPassed: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isPassed: false });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const getGoogleCalendarUrl = () => {
    const title = encodeURIComponent("Sahana & Kevin's Wedding Ceremony & Reception");
    const details = encodeURIComponent("Celebrate the wedding of Sahana & Kevin.\nCeremony: 4:00 PM\nReception: 7:00 PM\nVenue: Eden Farms, Bangalore.");
    const location = encodeURIComponent("Eden Farms, Dasanayakanahalli, Hennur-Bagalur Road, Bangalore, Karnataka");
    const dates = "20261212T103000Z/20261212T173000Z";
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
  };

  const downloadIcs = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Sahana & Kevin//Wedding Invitation//EN
CALSCALE:GREGORIAN
BEGIN:VEVENT
SUMMARY:Wedding of Sahana & Kevin
DESCRIPTION:Together with their families\\, Sahana & Kevin invite you to celebrate their wedding.\\nCeremony: 4:00 PM\\nReception: 7:00 PM
LOCATION:Eden Farms\\, Dasanayakanahalli\\, Hennur-Bagalur Road\\, Bangalore\\, Karnataka
DTSTART:20261212T103000Z
DTEND:20261212T173000Z
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'Sahana_Kevin_Wedding.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="countdown" className="countdown-section py-2 py-md-3 position-relative">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-9">
            <div className="countdown-card text-center p-3 p-sm-4">
              <p className="countdown-eyebrow text-gold-soft mb-1 text-uppercase tracking-wider small">
                12 DECEMBER 2026 • 4:00 PM
              </p>
              
              <h2 className="countdown-title text-gold-champagne mb-2" style={{ fontSize: '1.6rem' }}>
                COUNTING DOWN TO FOREVER
              </h2>

              <FloralDivider className="mb-3" />

              {timeLeft.isPassed ? (
                <div className="passed-celebration my-3">
                  <Heart size={28} className="text-gold-champagne mb-2 pulse-anim" />
                  <h3 className="celebrate-text text-gold-shimmer">Today We Say &ldquo;I Do&rdquo;!</h3>
                  <p className="text-ivory mt-1 small">The celebration of our forever has begun.</p>
                </div>
              ) : (
                <div className="countdown-timer-grid d-flex justify-content-center align-items-center flex-wrap gap-2 gap-md-3 my-3">
                  {/* Days */}
                  <div className="countdown-unit-box">
                    <div className="unit-number-card">
                      <span className="unit-number text-gold-metallic">
                        {String(timeLeft.days).padStart(2, '0')}
                      </span>
                    </div>
                    <span className="unit-label text-gold-soft">DAYS</span>
                  </div>

                  <span className="unit-separator text-gold-soft">:</span>

                  {/* Hours */}
                  <div className="countdown-unit-box">
                    <div className="unit-number-card">
                      <span className="unit-number text-gold-metallic">
                        {String(timeLeft.hours).padStart(2, '0')}
                      </span>
                    </div>
                    <span className="unit-label text-gold-soft">HOURS</span>
                  </div>

                  <span className="unit-separator text-gold-soft">:</span>

                  {/* Minutes */}
                  <div className="countdown-unit-box">
                    <div className="unit-number-card">
                      <span className="unit-number text-gold-metallic">
                        {String(timeLeft.minutes).padStart(2, '0')}
                      </span>
                    </div>
                    <span className="unit-label text-gold-soft">MINUTES</span>
                  </div>

                  <span className="unit-separator text-gold-soft">:</span>

                  {/* Seconds */}
                  <div className="countdown-unit-box">
                    <div className="unit-number-card">
                      <span className="unit-number text-gold-metallic">
                        {String(timeLeft.seconds).padStart(2, '0')}
                      </span>
                    </div>
                    <span className="unit-label text-gold-soft">SECONDS</span>
                  </div>
                </div>
              )}

              {/* Add to Calendar Action Buttons */}
              <div className="add-calendar-actions mt-3 pt-1 d-flex justify-content-center gap-2 flex-wrap">
                <a
                  href={getGoogleCalendarUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold-outline btn-sm d-inline-flex align-items-center gap-1"
                >
                  <Calendar size={13} />
                  <span>Google Calendar</span>
                  <ExternalLink size={11} />
                </a>

                <button
                  onClick={downloadIcs}
                  className="btn btn-gold-outline btn-sm d-inline-flex align-items-center gap-1"
                >
                  <Download size={13} />
                  <span>Apple / Outlook iCal</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
