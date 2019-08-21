//= require workarea/storefront/spec_helper
//= require workarea/storefront/google_address_autocomplete/config
//= require workarea/storefront/google_address_autocomplete/templates/autocomplete_text_box
//= require workarea/storefront/google_address_autocomplete/modules/google_address_autocomplete

(function () {
    'use strict';

    describe('WORKAREA.googleAddressAutocomplete', function () {
        describe('init', function () {
            it('requests the Google Places API once', function () {
                var markup = 'address_fields.html',
                    $fixture = $(fixture.load(markup, true)),
                    spy = sinon.spy($, 'getScript');

                WORKAREA.googleAddressAutocomplete.init($fixture);

                expect(spy.calledOnce).to.equal(true);

                $.getScript.restore();
            });

            it('adds a geocomplete text-box to the form', function () {
                var markup = 'address_fields.html',
                    $fixture = $(fixture.load(markup, true));

                sinon.stub($, 'getScript', function () {
                    return true;
                });

                sinon.stub($.fn, 'geocomplete', function () {
                    return $('#google-address-autocomplete-0');
                });

                WORKAREA.googleAddressAutocomplete.init($fixture);
                WORKAREA.googleAddressAutocomplete.resolveLoadingPlacesApi();

                expect($('#google-address-autocomplete-0').length).to.equal(1);

                $.getScript.restore();
                $.fn.geocomplete.restore();
            });

            it('updates each field accordingly', function () {
                var markup = 'address_fields.html',
                    $fixture = $(fixture.load(markup, true)),

                    geocodeResult = {
                        address_components: [
                            { 'long_name': '123', 'types': ['street_number'] },
                            { 'long_name': 'Foo Street', 'types': ['route'] },
                            { 'long_name': 'Baradelphia', 'types': ['locality'] },
                            { 'short_name': 'BAZ', 'types': ['administrative_area_level_1'] },
                            { 'short_name': 'QUX', 'types': ['country'] },
                            { 'long_name': '54321', 'types': ['postal_code']  }
                        ]
                    };

                sinon.stub($, 'getScript', function () {
                    return true;
                });

                sinon.stub($.fn, 'geocomplete', function () {
                    return $('#google-address-autocomplete-0');
                });

                WORKAREA.googleAddressAutocomplete.init($fixture);
                WORKAREA.googleAddressAutocomplete.resolveLoadingPlacesApi();

                $('#google-address-autocomplete-0')
                .trigger('geocode:result', geocodeResult);

                expect($('[name$="address[street]"]').val()).to.equal('123 Foo Street');
                expect($('[name$="address[city]"]').val()).to.equal('Baradelphia');
                expect($('[name$="address[region]"]').val()).to.equal('BAZ');
                expect($('[name$="address[country]"]').val()).to.equal('QUX');
                expect($('[name$="address[postal_code]"]').val()).to.equal('54321');

                $.getScript.restore();
                $.fn.geocomplete.restore();
            });
        });

        describe('resolveLoadingPlacesApi', function () {
            it('successfully resolves the loading API promise', function () {
                var promise = WORKAREA.googleAddressAutocomplete.resolveLoadingPlacesApi();

                expect(promise.state() === 'resolved').to.equal(true);
            });
        });
    });
}());
