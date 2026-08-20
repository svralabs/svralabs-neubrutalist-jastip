import React from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import Badge from '../components/Badge';

export default function ComponentShowcase() {
  const buttonVariants = ['primary', 'secondary', 'accentPink', 'accentPurple', 'accentOrange', 'white', 'black'];
  const buttonSizes = ['small', 'medium', 'large'];
  const inputTypes = ['text', 'email', 'password', 'search'];

  return (
    <div className="pt-32 pb-xl px-margin flex-grow max-w-7xl mx-auto w-full">
      <section className="text-center mb-xl">
        <h1 className="font-headline-main-mobile md:text-headline-main font-black inline-block px-md py-xs bg-black text-white transform -rotate-1 mb-md">
          COMPONENT SHOWCASE
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto mt-lg">
          Pixel-perfect neubrutalist components for your next project.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
        <div className="bg-surface border-2 border-black rounded-xl p-lg neubrutalist-shadow">
          <h3 className="font-heading-card text-heading-card mb-lg uppercase tracking-tight border-b-2 border-black pb-xs inline-block">BUTTON VARIANTS</h3>
          <div className="flex flex-wrap gap-md mt-md">
            {buttonVariants.map((variant) => (
              <Button key={variant} variant={variant}>
                {variant}
              </Button>
            ))}
          </div>
        </div>

        <div className="bg-surface border-2 border-black rounded-xl p-lg neubrutalist-shadow">
          <h3 className="font-heading-card text-heading-card mb-lg uppercase tracking-tight border-b-2 border-black pb-xs inline-block">BUTTON SIZES</h3>
          <div className="flex items-end gap-md mt-md">
            {buttonSizes.map((size) => (
              <Button key={size} size={size}>
                {size}
              </Button>
            ))}
          </div>
        </div>

        <div className="bg-surface border-2 border-black rounded-xl p-lg neubrutalist-shadow">
          <h3 className="font-heading-card text-heading-card mb-lg uppercase tracking-tight border-b-2 border-black pb-xs inline-block">BUTTON STATES</h3>
          <div className="flex flex-wrap gap-md mt-md">
            <div className="flex flex-col items-center gap-xs">
              <span className="text-xs font-label-bold text-on-surface-variant uppercase">Default</span>
              <Button>Click Me</Button>
            </div>
            <div className="flex flex-col items-center gap-xs">
              <span className="text-xs font-label-bold text-on-surface-variant uppercase">Hover (2px)</span>
              <Button className="btn-state-hover">Hovered</Button>
            </div>
            <div className="flex flex-col items-center gap-xs">
              <span className="text-xs font-label-bold text-on-surface-variant uppercase">Active (4px)</span>
              <Button className="btn-state-active">Pressed</Button>
            </div>
            <div className="flex flex-col items-center gap-xs">
              <span className="text-xs font-label-bold text-on-surface-variant uppercase">Disabled</span>
              <Button disabled>Disabled</Button>
            </div>
          </div>
        </div>

        <div className="bg-surface border-2 border-black rounded-xl p-lg neubrutalist-shadow">
          <h3 className="font-heading-card text-heading-card mb-lg uppercase tracking-tight border-b-2 border-black pb-xs inline-block">INPUT VARIANTS</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-xl mt-md">
            {inputTypes.map((type) => (
              <div key={type} className="flex flex-col gap-xs">
                <label className="text-xs font-label-bold text-on-surface-variant uppercase">{type} Input</label>
                <Input
                  type={type}
                  placeholder={`Enter ${type}`}
                  icon={type === 'search' ? 'search' : undefined}
                />
              </div>
            ))}
            <div className="flex flex-col gap-xs">
              <label className="text-xs font-label-bold text-on-surface-variant uppercase">Disabled Input</label>
              <Input
                type="text"
                placeholder="Disabled"
                disabled
              />
            </div>
          </div>
        </div>

        <div className="bg-surface border-2 border-black rounded-xl p-lg neubrutalist-shadow">
          <h3 className="font-heading-card text-heading-card mb-lg uppercase tracking-tight border-b-2 border-black pb-xs inline-block">BADGE VARIANTS</h3>
          <div className="flex flex-wrap gap-md mt-md">
            {buttonVariants.map((variant) => (
              <Badge key={variant} variant={variant}>
                {variant}
              </Badge>
            ))}
          </div>
        </div>

        <div className="bg-surface border-2 border-black rounded-xl p-lg neubrutalist-shadow">
          <h3 className="font-heading-card text-heading-card mb-lg uppercase tracking-tight border-b-2 border-black pb-xs inline-block">BADGE SIZES</h3>
          <div className="flex items-end gap-md mt-md">
            {buttonSizes.map((size) => (
              <Badge key={size} size={size}>
                {size}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
