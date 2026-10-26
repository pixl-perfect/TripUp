// TripUp design system components (ported from the TripUp design system bundle).
// Styling lives in ds.css, which reads every value from tokens.css.
import React from 'react';
import { ICONS } from './icons.js';

const cx = (...a) => a.filter(Boolean).join(' ');

export function Icon({ name, size = 24, label, className, style }) {
  const body = ICONS[name];
  if (!body) return null;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
      strokeLinecap="round" strokeLinejoin="round" aria-hidden={label ? undefined : true}
      role={label ? 'img' : undefined} aria-label={label} className={cx('tu-icon', className)} style={style}
      dangerouslySetInnerHTML={{ __html: body }} />
  );
}

export function Button({ variant = 'primary', size = 'L', icon, className, children, ...rest }) {
  return (
    <button type="button" {...rest} className={cx('tu-btn', `tu-btn--${variant}`, `tu-btn--${size}`, className)}>
      {icon && <Icon name={icon} size={size === 'L' ? 20 : 18} />}
      {children}
    </button>
  );
}

export function Chip({ tone = 'default', icon, className, children, ...rest }) {
  return (
    <span {...rest} className={cx('tu-chip', `tu-chip--${tone}`, className)}>
      {icon && <Icon name={icon} size={16} />}
      {children}
    </span>
  );
}

export function ChipButton({ tone = 'default', className, children, ...rest }) {
  return (
    <button type="button" {...rest} className={cx('tu-chip', 'tu-chipbtn', `tu-chip--${tone}`, className)}>{children}</button>
  );
}

export function IconButton({ variant = 'glass', icon = 'plus', label, className, size, ...rest }) {
  return (
    <button type="button" aria-label={label} {...rest} className={cx('tu-iconbtn', `tu-iconbtn--${variant}`, className)}
      style={size ? { width: size, height: size } : undefined}>
      <Icon name={icon} size={20} />
    </button>
  );
}

export function Avatar({ size = 'M', person, className, style, dim }) {
  if (!person) return null;
  return (
    <span className={cx('tu-avatar', `tu-avatar--${size}`, dim && 'is-dim', className)} title={person.name}
      style={{ background: `var(--person-${person.id})`, ...style }}>
      {person.initials}
    </span>
  );
}

export function AvatarStack({ people, size = 'S', overlap = -6 }) {
  return (
    <span className="tu-avatars" style={{ gap: overlap }}>
      {people.map((p) => <Avatar key={p.id} size={size} person={p} />)}
    </span>
  );
}

export function StatusBar({ onImage, time = '9:41' }) {
  return (
    <div className={cx('tu-statusbar', onImage && 'tu-statusbar--image')} aria-hidden="true">
      <span className="tu-statusbar__time">{time}</span>
      <svg className="tu-statusbar__icons" width="70" height="15" viewBox="0 0 70 15">
        <rect x="0" y="8" width="3" height="4" rx="1" /><rect x="5" y="5.5" width="3" height="6.5" rx="1" />
        <rect x="10" y="3" width="3" height="9" rx="1" /><rect x="15" y="0.5" width="3" height="11.5" rx="1" />
        <path d="M31.5 3.2c2.3 0 4.4.9 6 2.4l1.1-1.2a10 10 0 0 0-14.2 0l1.1 1.2a8.6 8.6 0 0 1 6-2.4Zm0 3.4c1.4 0 2.6.5 3.6 1.4l1.1-1.2a6.9 6.9 0 0 0-9.4 0l1.1 1.2c1-.9 2.2-1.4 3.6-1.4Zm0 3.4c.5 0 1 .2 1.3.5L31.5 12l-1.3-1.5c.3-.3.8-.5 1.3-.5Z" />
        <rect x="45.5" y="1.5" width="24" height="11" rx="3.5" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4" />
        <rect x="47.5" y="3.5" width="18" height="7" rx="2" />
      </svg>
    </div>
  );
}

export const HomeIndicator = () => <div className="tu-homeindicator" aria-hidden="true"><span /></div>;
export const SheetGrabber = () => <div className="tu-grabber" aria-hidden="true"><span /></div>;

export function SegmentItem({ selected, className, children, ...rest }) {
  return (
    <button type="button" role="tab" aria-selected={!!selected} {...rest}
      className={cx('tu-segment', selected && 'tu-segment--on', className)}>{children}</button>
  );
}

export function TextField({ icon = 'search', focused, className, label, ...rest }) {
  return (
    <label className={cx('tu-field', focused && 'tu-field--focused', className)}>
      {icon && <Icon name={icon} size={18} />}
      <span className="sr-only">{label}</span>
      <input type="text" {...rest} />
    </label>
  );
}

export function TripCard({ title, subtitle, chip, chipTone = 'accent', people = [], photo, onClick }) {
  return (
    <button type="button" className="tu-tripcard tu-cardbtn" onClick={onClick}>
      <span className="tu-photo" style={photo ? { backgroundImage: `url(${photo})` } : undefined} />
      <span className="tu-tripcard__text">
        <span className="tu-tripcard__title">{title}</span>
        <span className="tu-tripcard__sub">{subtitle}</span>
        <span className="tu-tripcard__meta">
          {chip && <Chip tone={chipTone}>{chip}</Chip>}
          <AvatarStack people={people} size="S" overlap={-6} />
        </span>
      </span>
      <Icon name="chevron-right" size={20} className="tu-chevron" />
    </button>
  );
}

const ITIN_ICON = { done: 'clock', now: 'map-pin', planned: 'calendar', undecided: 'utensils' };
export function ItineraryItem({ state = 'planned', time, title, subtitle, icon, chip, onClick, className }) {
  const Card = onClick ? 'button' : 'div';
  return (
    <div className={cx('tu-itin', `tu-itin--${state}`, className)}>
      <span className="tu-itin__time">{time}</span>
      <Card type={onClick ? 'button' : undefined} className={cx('tu-itin__card', onClick && 'tu-cardbtn')} onClick={onClick}>
        <span className="tu-tile"><Icon name={icon || ITIN_ICON[state]} size={18} /></span>
        <span className="tu-itin__text">
          <span className="tu-itin__title">{title}</span>
          <span className="tu-itin__sub">{subtitle}</span>
        </span>
        {state === 'undecided' && chip && <Chip tone="poll">{chip}</Chip>}
      </Card>
    </div>
  );
}

export function PollOption({ name, votes, percent, voters, leading, leadingLabel = 'Leading', mine, onClick, disabled }) {
  const pct = Math.max(0, Math.min(100, percent || 0));
  return (
    <button type="button" className={cx('tu-poll', 'tu-cardbtn', leading && 'tu-poll--leading', mine && 'is-mine')}
      onClick={onClick} disabled={disabled} aria-pressed={!!mine}>
      <span className="tu-poll__top">
        <span className="tu-poll__name">{name}</span>
        {leading && <Chip tone="poll">{leadingLabel}</Chip>}
        <span className="tu-poll__count" key={votes}>{votes}</span>
      </span>
      <span className="tu-poll__track"><span className="tu-poll__fill" style={{ width: pct + '%' }} /></span>
      <span className="tu-poll__voters">{voters || 'No votes yet'}</span>
    </button>
  );
}

export function PersonRow({ person, name, initials, color, subtitle, added, onAdd }) {
  return (
    <div className={cx('tu-person', added && 'tu-person--added')}>
      {person ? <Avatar size="L" person={person} />
        : <span className="tu-avatar tu-avatar--L" style={{ background: color }}>{initials}</span>}
      <div className="tu-row__text">
        <div className="tu-row__title">{name || person.fullName}</div>
        <div className="tu-row__sub">{subtitle}</div>
      </div>
      {added
        ? <span className="tu-added"><Icon name="check" size={16} />Added</span>
        : <Button variant="secondary" size="M" onClick={onAdd}>Add</Button>}
    </div>
  );
}

export function TransferRow({ title, subtitle, amount, status, people }) {
  const paid = status === 'paid';
  return (
    <div className={cx('tu-transfer', paid && 'is-paid')}>
      <AvatarStack people={people} size="M" overlap={-8} />
      <div className="tu-row__text">
        <div className="tu-row__title">{title}</div>
        <div className="tu-row__sub">{subtitle}</div>
      </div>
      <div className="tu-transfer__right">
        <span className="tu-transfer__amount">{amount}</span>
        <Chip tone={paid ? 'success' : 'warning'}>{paid ? 'Paid' : 'Pending'}</Chip>
      </div>
    </div>
  );
}

export function ActionChip({ active, icon = 'poll', className, children, ...rest }) {
  return (
    <button type="button" aria-pressed={!!active} {...rest} className={cx('tu-action', active && 'tu-action--active', className)}>
      <Icon name={icon} size={18} />{children}
    </button>
  );
}

export function NotificationBanner({ title, time = 'now', children, onClick }) {
  return (
    <button type="button" className="tu-banner tu-cardbtn" onClick={onClick} role="status">
      <span className="tu-banner__app">T</span>
      <span className="tu-banner__text">
        <span className="tu-banner__top"><span className="tu-banner__title">{title}</span><span className="tu-banner__time">{time}</span></span>
        <span className="tu-banner__body">{children}</span>
      </span>
    </button>
  );
}

export function Toast({ children }) {
  return (
    <div className="tu-toast" role="status">
      <span className="tu-toast__check"><Icon name="check" size={14} /></span>{children}
    </div>
  );
}
